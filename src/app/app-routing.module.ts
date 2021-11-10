import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'listado-peliculas', pathMatch: 'full' },
  {
    path: 'listado-peliculas',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
