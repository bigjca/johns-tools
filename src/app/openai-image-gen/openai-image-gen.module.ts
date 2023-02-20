import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenaiImageGenComponent } from './openai-image-gen.component';
import {FormsModule} from "@angular/forms";
import { OpenaiImageResultComponent } from './openai-image-result/openai-image-result.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    OpenaiImageGenComponent,
    OpenaiImageResultComponent
  ],
  exports: [
    OpenaiImageGenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class OpenaiImageGenModule { }
