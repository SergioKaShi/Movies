import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MoviesNewComponent } from './movies-new/movies-new.component';
import { MoviesListItemComponent } from './components/movies-list-item/movies-list-item.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListService } from './services/movies-list.service';
import { MoviesDetailService } from './services/movies-detail.service';
import { SharedModule } from '../shared/shared.module';

export const MOVIES_COMPONENTS = [
  MoviesListComponent, MoviesDetailComponent, MoviesNewComponent,
  MoviesListItemComponent
];

export const MOVIES_SERVICES = [
  MoviesListService, MoviesDetailService
]

@NgModule({
  declarations: [MOVIES_COMPONENTS],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  providers: [MOVIES_SERVICES]
})
export class MoviesModule { }
