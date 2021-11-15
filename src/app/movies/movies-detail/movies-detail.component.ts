import { Component, OnInit } from '@angular/core';
import { MoviesDetailStore } from './movies-detail-store';
import { BaseUnsubscribeComponent } from 'src/app/shared/base-unsubscribe/base-unsubscribe.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieData } from '../models';
import { filterNull } from 'src/app/core/utils/filter-null.operator';


@Component({
  selector: 'mov-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
  providers: [MoviesDetailStore]
})
export class MoviesDetailComponent extends BaseUnsubscribeComponent implements OnInit {

  private id: number;
  public movie: MovieData;

  constructor(private store: MoviesDetailStore, private route: ActivatedRoute, private router: Router) {
    super();
    this.route.params.subscribe((params: Params) => { this.id = params.id || null; });
  }

  ngOnInit(): void {
    this.store.loadMovieDetail({ id: this.id });
    this.subscribeMovieData();
  }

  private subscribeMovieData(): void {
    this.store.getMovie.pipe(this.autoUnsubscribe(), filterNull()).subscribe((movie) => {
      this.movie = { ...movie };
    });
  }

  public editMovie(): void {
    this.router.navigate(['peliculas/editar', this.id]);
  }

  public delelteMovie(): void {
    this.store.deleteMovie({ id: this.id });
  }

  public goBack(): void {
    this.router.navigate(['/peliculas'])
  }
}
