import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsRouterModule} from './forms.router';
import {RideFormComponent} from './ride-form/ride-form.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsRouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [RideFormComponent, TemplateDrivenFormsComponent]
})
export class FormModule {
}
