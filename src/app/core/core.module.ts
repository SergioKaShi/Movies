import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const CORE_COMPONENTES = [FooterComponent, SidebarComponent];

@NgModule({
  declarations: [
    CORE_COMPONENTES
  ],
  exports: [CORE_COMPONENTES],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
