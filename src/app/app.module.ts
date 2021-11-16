import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { CoreModule } from './core/core.module';
import { AppConfigService } from './security-services/app-config.service';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './core/@redux';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { ToastrModule } from 'ngx-toastr';


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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    CoreModule,
    StoreModule.forRoot(
      ROOT_REDUCERS,
      {
        runtimeChecks: {
          strictStateImmutability: false,
          strictActionImmutability: false
        }
      }
    ),
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfigService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
