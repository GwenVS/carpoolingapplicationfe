import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [ImageUploadComponent],
  exports: [
    ImageUploadComponent
  ]
})
export class SharedModule {

}
