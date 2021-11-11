import { Component, OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'thespis-base-unsubscribe',
  template: ''
})
export class BaseUnsubscribeComponent implements OnDestroy {
  protected $unsubscribe = new Subject<void>();

  ngOnDestroy(): void {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

  autoUnsubscribe(): MonoTypeOperatorFunction<any> {
    return takeUntil(this.$unsubscribe.asObservable());
  }

}
