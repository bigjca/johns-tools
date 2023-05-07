import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GameSearchComponent} from "./game-search/game-search.component";

const routes: Routes = [
  {path: '', redirectTo: 'game-search', pathMatch: 'full'},
  {path: 'game-search', component: GameSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
