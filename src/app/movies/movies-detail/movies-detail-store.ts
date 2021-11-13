import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { MovieData } from '../models';
import { MoviesDetailService } from '../services/movies-detail.service';

export interface MoviesDetailState {
  movie: MovieData;
}

const DEFAULT_STATE: MoviesDetailState = {
  movie: null
}

@Injectable()
export class MoviesDetailStore extends ComponentStore<MoviesDetailState> {

  constructor(private moviesDetailService: MoviesDetailService) {
    super(DEFAULT_STATE);
  }

  readonly getMovie = this.select(state => state.movie);

  //#region EFFECTS
  readonly loadMovieDetail = this.effect(($data: Observable<{ id: number }>) => {
    return $data.pipe(
      switchMap(({ id }) => this.moviesDetailService.getMovieById(id).pipe(
        tap(movie => this.setMovieDetail(movie)),
        catchError(error => {
          tap(() => this.setMovieDetail(null));
          return EMPTY;
        })
      ))
    )
  });
  //#endregion

  //#region UPDATERS
  readonly setMovieDetail = this.updater((state, movie: MovieData) => {
    return {
      ...state,
      movie: { ...movie }
    }
  });
  //#endregion
}

