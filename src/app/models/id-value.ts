export class IdValue {
    id: string;
    value: string;

    constructor(item?: any) {
        this.id = item.id || null;
        this.value = item.value || null;
    }
}