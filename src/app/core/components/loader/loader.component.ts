import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromCore from 'src/app/core/@redux';
import { BaseUnsubscribeComponent } from '../../../shared/base-unsubscribe/base-unsubscribe.component';

@Component({
  selector: 'mov-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent extends BaseUnsubscribeComponent implements OnInit {

  public loading: boolean;

  constructor(private store: Store<fromCore.State>, private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.subscribeLoading();
  }

  private subscribeLoading(): void {
    this.store.pipe(select(fromCore.getMainLoaderVisible), this.autoUnsubscribe()).subscribe(loading => {
      if (this.loading !== loading) {
        this.loading = loading;
        this.cdr.detectChanges();
      }
    });
  }

}
