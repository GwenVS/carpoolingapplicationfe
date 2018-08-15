import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [ImageUploadComponent],
  exports: [
    ImageUploadComponent
  ]
})
export class SharedModule { }
