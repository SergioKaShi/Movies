import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TranslocoModule } from '@ngneat/transloco';

export const CORE_COMPONENTES = [FooterComponent, SidebarComponent, LoaderComponent];

@NgModule({
  declarations: [
    CORE_COMPONENTES
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ],
  exports: [CORE_COMPONENTES]
})
export class CoreModule { }
