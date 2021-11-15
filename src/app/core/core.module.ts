import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const CORE_COMPONENTES = [
  FooterComponent, MenuComponent, SidebarComponent
];

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
