import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromCore from 'src/app/core/@redux';
import { CoreActions } from 'src/app/core/@redux/actions';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private requests: HttpRequest<any>[] = [];
  private urlsToExclude = [];

  constructor(private store: Store<fromCore.State>) { }

  private hideLoader(): void {
    this.store.dispatch(CoreActions.hideMainLoader());
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.urlsToExclude.some(x => req.url.toLowerCase().includes(x))) {
      return next.handle(req);
    }

    this.requests.push(req);
    this.store.dispatch(CoreActions.showMainLoader());

    return new Observable(observer => {
      const subscription = next.handle(req).subscribe(
        event => {
          if (event instanceof HttpResponse) {
            this.hideLoader();
            observer.next(event);
          }
        },
        err => { this.hideLoader(); observer.error(err); },
        () => { this.hideLoader(); observer.complete(); }
      );
      return () => {
        this.hideLoader();
        subscription.unsubscribe();
      };
    });
  }
}
