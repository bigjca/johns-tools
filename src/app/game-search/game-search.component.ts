import { Component } from '@angular/core';
import {GameInfoComponent} from "../game-info/game-info.component";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {GameInfo} from "../models/game-info";

@Component({
  selector: 'app-game-search',
  standalone: true,
  imports: [FormsModule, HttpClientModule, GameInfoComponent],
  templateUrl: './game-search.component.html',
  styleUrl: './game-search.component.css'
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
