import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSearchComponent } from './game-search.component';
import {GameInfoComponent} from "./game-info/game-info.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    GameSearchComponent,
    GameInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GameSearchModule { }
