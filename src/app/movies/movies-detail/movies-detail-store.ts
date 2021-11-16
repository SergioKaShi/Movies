import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { translate } from '@ngneat/transloco';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { ToasterMessageService } from 'src/app/services/toaster-message.service';
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

  constructor(
    private moviesDetailService: MoviesDetailService,
    private router: Router,
    private toastrService: ToasterMessageService
  ) {
    super(DEFAULT_STATE);
  }

  readonly getMovie = this.select(state => state.movie);

  //#region EFFECTS
  readonly loadMovieDetail = this.effect(($data: Observable<{ id: number }>) => {
    return $data.pipe(
      switchMap(({ id }) => this.moviesDetailService.getMovieById(id).pipe(
        tap(movie => this.setMovieDetail(movie)),
        catchError(error => {
          this.toastrService.showErrorMessage(translate('errors.movieDetailLoad'));
          tap(() => this.setMovieDetail(null));
          return EMPTY;
        })
      ))
    )
  });

  readonly deleteMovie = this.effect(($data: Observable<{ id: number }>) => {
    return $data.pipe(
      switchMap(({ id }) => this.moviesDetailService.deleteMovie(id).pipe(
        tap(() => {
          this.toastrService.showSuccessMessage(translate('success.movieDetailDelete'));
          this.router.navigate(['peliculas']);
        }),
        catchError(() => {
          this.toastrService.showErrorMessage(translate('errors.movieDetailDelete'));
          return EMPTY;
        })
      ))
    )
  });
  //#endregion

  //#region UPDATERS
  readonly setMovieDetail = this.updater((state, movie: MovieData) => ({ ...state, movie: { ...movie } }));
  //#endregion
}

