import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {MatButtonModule} from '@angular/material';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [ImageUploadComponent, CarsComponent],
  exports: [
    ImageUploadComponent, CarsComponent
  ]
})
export class SharedModule {

}
