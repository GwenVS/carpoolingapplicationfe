import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatListModule,
} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PagesRouterModule} from './pages.routes';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {LoginModule} from './login/login.module';
import {CoreModule} from '../containers/core/core.module';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatChipsModule,
    CoreModule,
    PagesRouterModule,
    LoginModule],
  declarations: [
    ContactComponent,
    AboutComponent
  ],
  exports: [],
  providers: []
})
export class PagesModule {
}
