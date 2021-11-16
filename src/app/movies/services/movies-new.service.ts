import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigService } from 'src/app/security-services/app-config.service';
import { IdValue } from 'src/app/models';
import { MovieDataForm } from '../models/movie-data-form';

@Injectable()
export class MoviesNewService {

  private url = this.appConfig.UrlApi;

  constructor(private httpClient: HttpClient, private appConfig: AppConfigService) { }

  postNewMovie(movie: MovieDataForm): Observable<MovieDataForm> {
    const url = `${this.url}movies`;
    const movieData = {
      ...movie,
      company: new IdValue({ id: movie.companyId, value: movie.companyName })
    };

    return this.httpClient.post<any>(url, new MovieDataForm().toMovieData(movieData)).pipe(map(data => new MovieDataForm(data)));
  }

  putMovie(movie: MovieDataForm): Observable<MovieDataForm> {
    const url = `${this.url}movies/${movie.id}`;
    const movieData = {
      ...movie,
      company: new IdValue({ id: movie.companyId, value: movie.companyName })
    };

    return this.httpClient.put<any>(url, new MovieDataForm().toMovieData(movieData)).pipe(map(data => new MovieDataForm(data)));
  }

  getActorsOptions(): Observable<Array<IdValue>> {
    const url = `${this.url}actors`;

    return this.httpClient.get<any>(url).pipe(map(data => data.map(
      (item: any) => new IdValue({ id: item.id, value: `${item.first_name} ${item.last_name}` })))
    );
  }

  getCompaniesOptions(): Observable<Array<IdValue>> {
    const url = `${this.url}companies`;

    return this.httpClient.get<any>(url).pipe(map(data => data.map(
      (item: any) => new IdValue({ id: item.id, value: item.name })))
    );
  }

}
