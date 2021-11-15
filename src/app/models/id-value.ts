export class IdValue {
    id: number;
    value: string;
    selected?: boolean;

    constructor(item?: any) {
        this.id = item.id || null;
        this.value = item.value || null;
        this.selected = item.selected || false;
    }
}