import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-openai-image-result',
  templateUrl: './openai-image-result.component.html',
  styleUrls: ['./openai-image-result.component.css']
})
export class OpenaiImageResultComponent {
  @Input() url?: string;
}
