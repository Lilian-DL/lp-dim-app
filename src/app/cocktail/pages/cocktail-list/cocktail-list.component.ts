import { Cocktail } from './../../../core/models/cocktail';
import { max, Observable, of } from 'rxjs';
import { CocktailService } from './../../services/cocktail.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CocktailFormComponent } from '../../components/cocktail-form/cocktail-form.component';
import { CocktailFormData } from 'src/app/core/models/cocktailFormData';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails$: Observable<Cocktail[]>;
  displayedColumns: string[] = ['id', 'name'];

  //Bidouille
  ids: number[] = [];

  constructor(
    private _cocktailService: CocktailService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.cocktails$ = this._cocktailService.get();
  }

  showCocktailDetails(cocktail: Cocktail) {
    this._router.navigateByUrl('/cocktails/' + cocktail.id);
  }

  createCocktail() {
    const cocktailFormData: CocktailFormData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    };

    const dialogRef = this._dialog.open(CocktailFormComponent, {
      data: cocktailFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }

  setId(id: number) {
    //Bidouille
    this.ids.push(id);
  }
}
