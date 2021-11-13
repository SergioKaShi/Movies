export class MoviesListItem {
    id: number;
    title: string;
    poster: string;
    genre: Array<string>;

    constructor(item?: any){
        this.id = item?.id || null;
        this.title = item?.title || null;
        this.poster = item?.poster || null;
        this.genre = item?.genre || [];
    }
}