import { IdValue } from 'src/app/models';
import { MovieData } from './movie-data';

export class MovieDataForm extends MovieData {
    companyId: number;
    companyName: string;

    constructor(item?: any) {
        super(item);
        this.companyId = item?.company?.id || null;
        this.companyName = item?.company?.value || null;
    }

    public toMovieData(data: any): MovieData {
        return new MovieData({
            ...data,
            year: Number(data.year),
            duration: Number(data.duration),
            imdbRating: Number(data.imdbRating),
            company: new IdValue({ id: Number(data?.companyId) || null, value: data?.companyName || '' })
        })
    }
}