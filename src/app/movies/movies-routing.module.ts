import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesNewComponent } from './movies-new/movies-new.component';


const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'nueva', component: MoviesNewComponent },
  { path: 'detalle/:id', component: MoviesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
