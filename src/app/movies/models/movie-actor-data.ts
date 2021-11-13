export class MovieActorData {
    id: number;
    first_name: string;
    last_name: string;

    constructor(item?: any) {
        this.id = item.id || null;
        this.first_name = item.first_name || null;
        this.last_name = item.last_name || null;
    }
}