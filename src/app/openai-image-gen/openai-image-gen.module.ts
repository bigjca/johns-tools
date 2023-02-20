import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiImageGenComponent } from './openai-image-gen.component';



@NgModule({
  declarations: [
    OpenaiImageGenComponent
  ],
  exports: [
    OpenaiImageGenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OpenaiImageGenModule { }
