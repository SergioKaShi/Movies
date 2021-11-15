import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';

export const CORE_COMPONENTES = [FooterComponent, SidebarComponent, LoaderComponent];

@NgModule({
  declarations: [
    CORE_COMPONENTES
  ],
  imports: [
    CommonModule
  ],
  exports: [CORE_COMPONENTES]
})
export class CoreModule { }
