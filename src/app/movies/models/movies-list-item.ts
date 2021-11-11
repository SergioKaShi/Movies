export class MoviesListItem {
    id: number;
    title: string;
    poster: string;
    genre: Array<string>;
    year: number;
    duration: number;
    imdbRating: number;
    actors: Array<number>;

    constructor(item?: any){
        this.id = item?.id || null;
        this.title = item?.title || null;
        this.poster = item?.poster || null;
        this.genre = item?.genre || [];
        this.year = item?.year || null;
        this.duration = item?.duration || null;
        this.imdbRating = item?.imdbRating || null;
        this.actors = item?.actors || [];
    }
}