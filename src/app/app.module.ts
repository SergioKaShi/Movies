import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { CoreModule } from './core/core.module';
import { AppConfigService } from './security-services/app-config.service';
import { environment } from 'src/environments/environment';

export function initConfig(config: AppConfigService) {
  const promise = config.loadSettings(environment.configFile);
  return () => promise;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    CoreModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfigService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
