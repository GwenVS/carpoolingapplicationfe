import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {CarpoolerService} from '../../services/carpooler.service';
import {CarpoolersRoutingModule, routedComponents} from './carpoolers-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    CarpoolersRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    CarpoolerService,
  ],
})
export class CarpoolersModule { }
