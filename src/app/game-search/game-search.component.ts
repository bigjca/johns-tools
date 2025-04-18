import {Component, inject} from '@angular/core';
import {GameInfoComponent} from "../game-info/game-info.component";
import {FormsModule} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import {GameInfo} from "../models/game-info";

@Component({
    selector: 'app-game-search',
    templateUrl: './game-search.component.html',
    styleUrl: './game-search.component.css', imports: [FormsModule, GameInfoComponent]
})
export class GameSearchComponent {
  results: any[] = [];
  private readonly httpClient = inject(HttpClient);

  onSearchClick(text: string): void {
    this.httpClient.get<GameInfo[]>('/.netlify/functions/howlong', {params: {q: text}}).subscribe(res => {
      this.results = res;
    });
  }
}
