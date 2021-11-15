import { MovieData } from './movie-data';

export class MovieDataForm extends MovieData {
    companyId: string;
    companyName: string;

    constructor(item?: MovieData) {
        super(item);
        this.companyId = item.company?.id.toString() || null;
        this.companyName = item.company?.value || null;
    }

    public toMovieData(data: MovieDataForm): MovieData {
        return new MovieData({
            ...data,
            year: Number(data.year),
            duration: Number(data.duration),
            imdbRating: Number(data.imdbRating),
            company: { id: Number(data.companyId), value: data.companyName }
        })
    }
}