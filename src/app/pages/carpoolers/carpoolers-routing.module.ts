import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarpoolersComponent} from './carpoolers.component';
import {TableComponent} from './table/table.component';

const routes: Routes = [{
  path: '',
  component: CarpoolersComponent,
  children: [{
    path: 'table',
    component: TableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarpoolersRoutingModule { }

export const routedComponents = [
  CarpoolersComponent,
  TableComponent,
];
