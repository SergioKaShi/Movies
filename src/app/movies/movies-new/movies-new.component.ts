import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdValue } from 'src/app/models';
import { BaseUnsubscribeComponent } from '../../shared/base-unsubscribe/base-unsubscribe.component';
import { MoviesNewStore } from './movies-new-store';
import { ActivatedRoute } from '@angular/router';
import { filterNull } from '../../core/utils/filter-null.operator';
import { MovieDataForm } from '../models/movie-data-form';

@Component({
  selector: 'mov-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.scss'],
  providers: [MoviesNewStore]
})
export class MoviesNewComponent extends BaseUnsubscribeComponent implements OnInit {

  public newMovieForm: FormGroup;
  public movie: MovieDataForm;
  public actorsOptions: Array<IdValue>;
  public companiesOptions: Array<IdValue>;
  public movieId: number;
  public editMode: boolean = false;

  constructor(private fb: FormBuilder, private store: MoviesNewStore, private route: ActivatedRoute) {
    super();
    this.newMovieForm = this.createForm();
    this.route.params.subscribe(params => {
      this.movieId = params.id || null;
      this.editMode = this.movieId ? true : false;
    });
  }

  ngOnInit(): void {
    this.initMovieFormData();
    this.subscribeMovie();
    this.subscribeActorsOptions();
    this.subscribeCompaniesOptions();
    this.subscribeCompanyIdValue();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(250)])],
      poster: ['', Validators.maxLength(250)],
      genre: [[]],
      genreId: [null],
      year: [null],
      duration: [null],
      imdbRating: [null],
      actors: [[]],
      actorId: [null],
      companyId: [null],
      companyName: ['']
    });
  }

  private initMovieFormData(): void {
    this.store.loadActorsOptions();
    this.store.loadCompaniesOptions();
    if (this.editMode) {
      this.store.loadMovie({ id: this.movieId });
    }
  }

  private subscribeMovie(): void {
    this.store.getMovie.pipe(this.autoUnsubscribe(), filterNull()).subscribe((movie) => {
      this.movie = { ...movie };
      this.newMovieForm.patchValue(this.movie);
    });
  }

  private subscribeActorsOptions(): void {
    this.store.getActorsOptions.pipe(this.autoUnsubscribe()).subscribe((actorsOptions) => {
      this.actorsOptions = [...actorsOptions];
    });
  }

  private subscribeCompaniesOptions(): void {
    this.store.getCompaniesOptions.pipe(this.autoUnsubscribe()).subscribe((companiesOptions) => {
      this.companiesOptions = [...companiesOptions];
    });
  }

  private subscribeCompanyIdValue(): void {
    this.newMovieForm.controls.companyId.valueChanges.subscribe(data => {
      const companySelected = this.companiesOptions.find(company => company.id.toString() === data);
      this.newMovieForm.controls.companyName.setValue(companySelected?.value || null);
    });
  }

  public addGenreItem(item: string): void {
    const newValue = [...this.newMovieForm.controls.genre.value, item];
    this.newMovieForm.controls.genre.setValue(newValue);
  }

  public removeGenreItem(item: string): void {
    const newValue = [...this.newMovieForm.controls.genre.value.filter((g: string) => g !== item)];
    this.newMovieForm.controls.genre.setValue(newValue);
  }

  public addActorItem(item: IdValue): void {
    this.actorsOptions = [
      ...this.actorsOptions.map(option => {
        if (option.id === item.id) {
          option = { ...option, selected: true }
        }
        return option;
      })
    ];
    const newValue = [...this.newMovieForm.controls.actors.value, item];
    this.newMovieForm.controls.actors.setValue(newValue);
  }

  public removeActorItem(item: IdValue): void {
    this.actorsOptions = [
      ...this.actorsOptions.map(option => {
        if (option.id === item.id) {
          option = { ...option, selected: false }
        }
        return option;
      })
    ];
    const newValue = [...this.newMovieForm.controls.actors.value.filter((a: IdValue) => a.id !== item.id)];
    this.newMovieForm.controls.actors.setValue(newValue);
  }

  public createNewMovie(): void {
    this.store.createMovie({ movie: this.newMovieForm.getRawValue() });
  }

}
