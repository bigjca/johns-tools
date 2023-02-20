import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GameInfo} from "../models/game-info";

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent {

  results: any[] = [];

  constructor(private readonly httpClient: HttpClient) {}

  onSearchClick(text: string): void {
    this.httpClient.get<GameInfo[]>('/.netlify/functions/howlong', {params: {q: text}}).subscribe(res => {
      this.results = res;
    });
  }
}
