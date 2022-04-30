import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailDetailsComponent } from './pages/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './pages/cocktail-list/cocktail-list.component';
import { CocktailComponent } from './cocktail.component';

const routes: Routes = [
  {
    path: '',
    component : CocktailComponent,
    children : [
      {
        path : '',
        component : CocktailListComponent
      },
      {
        path : ':id',
        component : CocktailDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule { }
