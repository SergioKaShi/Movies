import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseUnsubscribeComponent } from './base-unsubscribe/base-unsubscribe.component';
import { TimePipe } from './pipes/time.pipe';

export const SHARED_COMPONENTES = [BaseUnsubscribeComponent];
export const SHARED_PIPES = [TimePipe];

@NgModule({
  declarations: [...SHARED_COMPONENTES, ...SHARED_PIPES],
  imports: [
    CommonModule
  ],
  exports: [...SHARED_COMPONENTES, ...SHARED_PIPES]
})
export class SharedModule { }
