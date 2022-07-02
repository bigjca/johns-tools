import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameInfo} from "./models/game-info";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'johns-tools';
  results: any[] = [];
  constructor(private httpClient: HttpClient) {}

  onSearchClick(text: string): void {
    console.log(text);
    this.httpClient.get<GameInfo[]>('/.netlify/functions/howlong', {params: {q: text}}).subscribe(res => {
      this.results = res;
    });
  }


}
