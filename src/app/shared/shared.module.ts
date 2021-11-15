import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseUnsubscribeComponent } from './base-unsubscribe/base-unsubscribe.component';
import { TimePipe } from './pipes/time.pipe';
import { MovInputComponent } from './mov-input/mov-input.component';
import { MovSelectComponent } from './mov-select/mov-select.component';

export const SHARED_COMPONENTES = [
  BaseUnsubscribeComponent, MovInputComponent, MovSelectComponent
];
export const SHARED_PIPES = [TimePipe];

@NgModule({
  declarations: [...SHARED_COMPONENTES, ...SHARED_PIPES],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [...SHARED_COMPONENTES, ...SHARED_PIPES]
})
export class SharedModule { }
