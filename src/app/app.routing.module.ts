import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameSearchComponent} from "./game-search/game-search.component";
import {TromboneChampComponent} from "./trombone-champ/trombone-champ.component";

const routes: Routes = [
  {path: '', redirectTo: 'game-search', pathMatch: 'full'},
  {path: 'game-search', component: GameSearchComponent},
  {path: 'trombone-champ', component: TromboneChampComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
