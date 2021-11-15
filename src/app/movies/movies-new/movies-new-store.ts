import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable, of } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { IdValue } from 'src/app/models';
import { MovieDataForm } from '../models/movie-data-form';
import { MoviesDetailService } from '../services/movies-detail.service';
import { MoviesNewService } from '../services/movies-new.service';


export interface MoviesNewState {
  movie: MovieDataForm;
  actors: Array<IdValue>;
  companies: Array<IdValue>;
}

const DEFAULT_STATE: MoviesNewState = {
  movie: null,
  actors: [],
  companies: []
}

@Injectable()
export class MoviesNewStore extends ComponentStore<MoviesNewState> {

  constructor(private moviesNewService: MoviesNewService, private moviesDetailService: MoviesDetailService) {
    super(DEFAULT_STATE);
  }

  readonly getMovie = this.select(state => state.movie);
  readonly getActorsOptions = this.select(state => state.actors);
  readonly getCompaniesOptions = this.select(state => state.companies);

  //#region EFFECTS
  readonly loadMovie = this.effect(($data: Observable<{ id: number }>) => {
    return $data.pipe(
      switchMap(({ id }) => this.moviesDetailService.getMovieById(id).pipe(
        tap(movie => this.setMovie(new MovieDataForm(movie))),
        catchError(error => {
          tap(() => this.setMovie(null));
          return EMPTY;
        })
      ))
    )
  });

  readonly createMovie = this.effect(($data: Observable<{ movie: MovieDataForm }>) => {
    return $data.pipe(
      switchMap(({ movie }) =>
        this.moviesNewService.postNewMovie(movie).pipe(
          tap(movie => this.setMovie(movie)),
          catchError(error => {
            tap(() => this.setMovie(null));
            return EMPTY;
          })
        )
      )
    )
  });

  readonly updateMovie = this.effect(($data: Observable<{ movie: MovieDataForm }>) => {
    return $data.pipe(
      switchMap(({ movie }) =>
        this.moviesNewService.putMovie(movie).pipe(
          tap(movie => this.setMovie(movie)),
          catchError(error => {
            tap(() => this.setMovie(null));
            return EMPTY;
          })
        )
      )
    )
  });

  readonly loadActorsOptions = this.effect(($origin) => {
    return $origin.pipe(
      switchMap(() => this.moviesNewService.getActorsOptions().pipe(
        tap(actors => this.setActorsOptions(actors)),
        catchError(__ => of([]))
      ))
    )
  });

  readonly loadCompaniesOptions = this.effect(($origin) => {
    return $origin.pipe(
      switchMap(() => this.moviesNewService.getCompaniesOptions().pipe(
        tap(companies => this.setCompaniesOptions(companies)),
        catchError(__ => of([]))
      ))
    )
  });
  //#endregion

  //#region UPDATERS
  readonly setMovie = this.updater((state, movie: MovieDataForm) => ({ ...state, movie }));
  readonly setActorsOptions = this.updater((state, actors: Array<IdValue>) => ({ ...state, actors: [...actors] }));
  readonly setCompaniesOptions = this.updater((state, companies: Array<IdValue>) => ({ ...state, companies: [...companies] }));
  //#endregion
}

