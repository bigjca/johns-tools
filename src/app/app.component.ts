import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'johns-tools';
  results: any = {};
  constructor() {}

  onSearchClick(text: string): void {
    console.log(text);
  }


}
