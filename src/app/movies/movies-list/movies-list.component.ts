import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseUnsubscribeComponent } from 'src/app/shared/base-unsubscribe/base-unsubscribe.component';
import { filterNull } from 'src/app/core/utils/filter-null.operator';
import { MoviesListItem } from '../models';
import { MoviesListStore } from './movies-list-store';

@Component({
  selector: 'mov-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [MoviesListStore]
})
export class MoviesListComponent extends BaseUnsubscribeComponent implements OnInit {

  public moviesList: Array<MoviesListItem> = [];

  constructor(private store: MoviesListStore, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.store.searchMoviesList();
    this.subscribeMoviesList();
  }

  public goToAddMovie(): void {
    this.router.navigate(['peliculas/nueva']);
  }

  private subscribeMoviesList(): void {
    this.store.getMoviesList.pipe(this.autoUnsubscribe(), filterNull()).subscribe(moviesList => {
      this.moviesList = moviesList;
    });
  }

  public goToDetail(id: number): void {
    this.router.navigate(['peliculas/detalle', id]);
  }
}
