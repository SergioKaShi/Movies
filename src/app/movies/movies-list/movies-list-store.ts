import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { MoviesListItem } from '../models';
import { MoviesListService } from '../services/movies-list.service';

export interface MoviesListState {
  moviesList: Array<MoviesListItem>;
}

const DEFAULT_STATE: MoviesListState = {
  moviesList: []
}

@Injectable()
export class MoviesListStore extends ComponentStore<MoviesListState> {

  constructor(private moviesListService: MoviesListService) {
    super(DEFAULT_STATE);
  }

  readonly getMoviesList = this.select(state => state.moviesList);

  //#region EFFECTS
  readonly searchMoviesList = this.effect(($origin) => {
    return $origin.pipe(
      switchMap(() => {
        return this.moviesListService.getMoviesList().pipe(
          tap(movies => this.setMoviesList(movies)),
          catchError(error => {
            tap(() => this.setMoviesList([]));
            return EMPTY;
          })
        )
      })
    )
  });
  //#endregion

  //#region UPDATERS
  readonly setMoviesList = this.updater((state, movies: Array<MoviesListItem>) => {
    return {
        ...state,
        moviesList: [...movies]
    }
});
  //#endregion
}

