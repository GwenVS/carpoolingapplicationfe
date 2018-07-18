import {Component, OnInit} from '@angular/core';

import {CarpoolerService} from '../../../services/carpooler.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class TableComponent implements OnInit {
  public carpoolers;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      smoker: {
        title: 'Smoker',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private carpoolerService: CarpoolerService) {
    this.getCarpoolers();
    const data = this.carpoolers;
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

  getCarpoolers() {
    this.carpoolerService.getCarpoolers().subscribe(
      data => (this.carpoolers = data),
      err => console.error(err), // todo: logging
      () => console.log('carpoolers loaded') // todo: logging
    );
  }
}
