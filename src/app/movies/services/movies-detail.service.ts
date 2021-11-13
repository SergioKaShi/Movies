import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigService } from 'src/app/security-services/app-config.service';
import { MovieData } from '../models';
import { MovieActorData } from '../models/movie-actor-data';
import { IdValue } from '../../models/id-value';


@Injectable()
export class MoviesDetailService {

    private url = this.appConfig.UrlApi;

    constructor(private httpClient: HttpClient, private appConfig: AppConfigService) { }

    getMovieById(id: number): Observable<MovieData> {
        const urlMovies = `${this.url}movies/${id}`;
        const urlActors = `${this.url}actors`;
        const urlCompanies = `${this.url}companies`;

        const resultMovies = this.httpClient.get<any>(urlMovies);
        const resultActors = this.httpClient.get<any>(urlActors);
        const resultCompanies = this.httpClient.get<any>(urlCompanies);

        return combineLatest([resultMovies, resultActors, resultCompanies]).pipe(
            map(([movie, actors, companies]) => {
                const companyFound = companies.find((company: any) => company.movies.includes(movie.id));

                return new MovieData({
                    ...movie,
                    actors: movie.actors.map((actorId: number) => {
                        const actorFound = actors.find((actor: any) => actor.id === actorId);
                        return actorFound ? new MovieActorData(actorFound) : null
                    }),
                    company: companyFound ? new IdValue({ id: companyFound.id, value: companyFound.name }) : null
                });
            })
        );
    }
}