import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocktailRoutingModule } from './cocktail-routing.module';
import { CocktailComponent } from './cocktail.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './components/cocktail-form/cocktail-form.component';

import { CocktailService } from './services/cocktail.service';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    CocktailComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailFormComponent
  ],
  imports: [
    CommonModule,
    CocktailRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [CocktailService, MatDatepickerModule, MatNativeDateModule],
})
export class CocktailModule { }
