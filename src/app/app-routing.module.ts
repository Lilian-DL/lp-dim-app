import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo : 'cocktails',
    pathMatch: 'full'
  },
  {
    path: 'students',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'cocktails',
    loadChildren: () => import('./cocktail/cocktail.module').then(m => m.CocktailModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
