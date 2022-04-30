import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from 'src/app/core/models/cocktail';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CocktailService } from './../../services/cocktail.service';
import { CocktailFormData } from './../../../core/models/cocktailFormData';
import { CocktailFormComponent } from './../../components/cocktail-form/cocktail-form.component';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  cocktail$: Observable<Cocktail>;
  constructor(
    private _cocktailService: CocktailService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
    });
  }

  fetchData(id: number) {
    this.cocktail$ = this._cocktailService.getById(id);
  }

  updateCocktail(cocktail: Cocktail) {
    const cocktailFormData: CocktailFormData = {
      isUpdateMode: true,
      studentToUpdate: cocktail,
    };

    const dialogRef = this._dialog.open(CocktailFormComponent, {
      data: cocktailFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deleteCocktail(id: number) {
    this._cocktailService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/cocktails');
    });
  }

  goBack() {
    this._location.back();
  }

}
