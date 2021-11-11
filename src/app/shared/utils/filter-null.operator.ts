import { Observable } from 'rxjs';

export const filterNull = () => {
    return function <T>(source: Observable<T>): Observable<T> {
        return new Observable(subscriber => {
            const subscription = source.subscribe({
                next(value) {
                    if (value !== undefined && value !== null) {
                        subscriber.next(value);
                    }
                },
                error(error) {
                    subscriber.error(error);
                },
                complete() {
                    subscriber.complete();
                }
            });

            return () => subscription.unsubscribe();
        });
    }
}