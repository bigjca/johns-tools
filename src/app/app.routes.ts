import { Routes } from '@angular/router';
import {GameSearchComponent} from "./game-search/game-search.component";

export const routes: Routes = [
  {path: '', redirectTo: 'game-search', pathMatch: 'full'},
  {path: 'game-search', component: GameSearchComponent},
];
