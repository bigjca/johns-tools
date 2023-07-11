import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {GameSearchModule} from "./game-search/game-search.module";
import {TromboneChampModule} from "./trombone-champ/trombone-champ.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameSearchModule,
    TromboneChampModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
