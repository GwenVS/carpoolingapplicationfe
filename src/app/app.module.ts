import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {CallbackComponent} from './pages/callback/callback.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CarpoolersComponent} from './pages/carpoolers/carpoolers.component';
import {ServicesModule} from './services/services.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LazyLoadModule} from './lazy-load/lazy-load.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    CarpoolersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServicesModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
