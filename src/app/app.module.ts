import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {TOKEN_NAME} from './services/auth.constant';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {CompleterService, Ng2CompleterModule} from 'ng2-completer';
import {NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor} from 'ng-loading-spinner';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServicesModule} from './services/services.module';
import {AuthpagesModule} from './authpages/authpages.module';
import {PublicpagesModule} from './publicpages/publicpages.module';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: TOKEN_NAME,
    tokenGetter: (() => {
      return 'eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJDYXJwb29saW5nYXBwbGljYXRpb24iLCJzdWIiOiJnd2VuIiwiYXVkIjoid2ViIiwiaWF0IjoxNTE5MzgzNDI3LCJleHAiOjE1MTkzODcwMjd9.qWX-cbmjq2gQKx4Ods9xm8tmkm_WkLE_9j6hZvEo8_isZM1riZg5VFXGR2kh1JlPNgfO4o4M4JfNmG-rXVmZGw';
    }),
    globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    Ng2CompleterModule,
    HttpClientModule,
    NgLoadingSpinnerModule,
    PublicpagesModule,
    BrowserAnimationsModule,
    ServicesModule,
    AuthpagesModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    Ng2CompleterModule,
    CompleterService,
    {provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
