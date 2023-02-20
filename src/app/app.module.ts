import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {OpenaiImageGenModule} from "./openai-image-gen/openai-image-gen.module";
import {GameSearchModule} from "./game-search/game-search.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GameSearchModule,
    OpenaiImageGenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
