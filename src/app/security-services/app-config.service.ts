import { Injectable } from '@angular/core';
import { AppConfig } from '../models';


@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    private config: AppConfig | undefined;

    get AppConfig(): AppConfig | undefined {
        return this.config;
    }

    get UrlApi(): string {
        return `${this.config?.urlApi}`;
    }

    constructor() { }

    public loadSettings(url: string) {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            const that = this;
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    const r: AppConfig = JSON.parse(this.response);
                    that.config = Object.freeze(r);
                    resolve(true);
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        });
    }
}
