import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {CompleterService, Ng2CompleterModule} from 'ng2-completer';
import {NgLoadingSpinnerModule, NgLoadingSpinnerInterceptor} from 'ng-loading-spinner';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServicesModule} from './services/services.module';
import {AuthpagesModule} from './authpages/authpages.module';
import {PublicpagesModule} from './publicpages/publicpages.module';
import {AuthGuardService} from './services/guards/auth-guard.service';

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
    Ng2CompleterModule,
    CompleterService,
    {provide: HTTP_INTERCEPTORS, useClass: NgLoadingSpinnerInterceptor, multi: true},
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
