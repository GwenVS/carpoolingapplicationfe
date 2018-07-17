import { Component } from '@angular/core';
import {
  PopoverCardComponent, PopoverFormComponent,
  PopoverTabsComponent,
} from './popover-examples.component';

@Component({
  selector: 'app-popovers',
  styleUrls: ['./popovers.component.scss'],
  templateUrl: './popovers.component.html',
})
export class PopoversComponent {
  tabsComponent = PopoverTabsComponent;
  cardComponent = PopoverCardComponent;
  formComponent = PopoverFormComponent;
}
