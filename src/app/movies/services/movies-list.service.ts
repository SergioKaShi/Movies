import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfigService } from 'src/app/security-services/app-config.service';
import { MoviesListItem } from '../models';


@Injectable()
export class MoviesListService {

    private url = this.appConfig.UrlApi;

    constructor(private httpClient: HttpClient, private appConfig: AppConfigService) { }

    getMoviesList(): Observable<Array<MoviesListItem>> {
        const url = `${this.url}movies`;

        return this.httpClient.get<any>(url).pipe(map(
            data => {
                return data.map((item: any) => new MoviesListItem(item)) || []
            }
        ));
    }

}