import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RideFormComponent} from './ride-form/ride-form.component';
import {TemplateDrivenFormsComponent} from './template-driven-forms/template-driven-forms.component';

const FormsRoutes: Routes = [
  {path: 'ride_form', component: RideFormComponent},
  {path: 'template_forms', component: TemplateDrivenFormsComponent},

];

@NgModule({
  imports: [
    RouterModule.forChild(FormsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormsRouterModule {
}
