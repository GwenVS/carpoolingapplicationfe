import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MainComponent} from './containers/main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {ProfileComponent} from './components/profile/profile.component';
import {TOKEN_NAME} from './services/auth.constant';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {CompleterService, Ng2CompleterModule} from 'ng2-completer';
import {NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor} from 'ng-loading-spinner';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoginModule} from './publicPages/login/login.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServicesModule} from './services/services.module';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';


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
    AppComponent,
    NavigationBarComponent,
    MainComponent,
    ProfileComponent,
    ImageUploadComponent
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
    LoginModule,
    BrowserAnimationsModule,
    ServicesModule
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
