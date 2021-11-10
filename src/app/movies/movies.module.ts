import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesNewComponent } from './movies-new/movies-new.component';
import { MoviesListItemComponent } from './components/movies-list-item/movies-list-item.component';
import { MoviesRoutingModule } from './movies-routing.module';

export const MOVIES_COMPONENTS = [
  MoviesListComponent, MoviesDetailComponent, MoviesNewComponent,
  MoviesListItemComponent
];

@NgModule({
  declarations: [MOVIES_COMPONENTS],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
