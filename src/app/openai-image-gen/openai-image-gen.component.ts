import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-openai-image-gen',
  templateUrl: './openai-image-gen.component.html',
  styleUrls: ['./openai-image-gen.component.css']
})
export class OpenaiImageGenComponent {

  numberOptions = [1,2,3,4,5,6,7,8,9,10];
  sizeOptions = ['256x256', '512x512', '1024x1024'];

  imageResults: any[] = [];

  constructor(private readonly httpClient: HttpClient) {}

  onGenerateClick(prompt: string, n: string, size: string) {
    this.httpClient.post<any>('/.netlify/functions/openai-image', {prompt, n: parseInt(n), size}).subscribe(res => {
      this.imageResults = res?.data;
    });
  }
}
