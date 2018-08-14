import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {routes} from './app.router';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
