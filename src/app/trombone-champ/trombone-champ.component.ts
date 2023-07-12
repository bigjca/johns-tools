import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap} from "rxjs";
import {TromboneChampSong} from "../models/trombone-champ-song";

@Component({
  selector: 'app-trombone-champ',
  templateUrl: './trombone-champ.component.html',
  styleUrls: ['./trombone-champ.component.css']
})
export class TromboneChampComponent {

  tromboneSongs$?: Observable<TromboneChampSong[]>;
  constructor(private readonly httpClient: HttpClient) {
    const songsFromStorage = localStorage.getItem('tromboneSongs');
    if(songsFromStorage) {
      this.tromboneSongs$ = of(JSON.parse(songsFromStorage));
    } else {
      this.tromboneSongs$ = httpClient.get<TromboneChampSong[]>('/.netlify/functions/trombone')
        .pipe(tap(songs => localStorage.setItem('tromboneSongs', JSON.stringify(songs))));
    }

  }
}
