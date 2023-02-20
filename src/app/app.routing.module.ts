import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OpenaiImageGenComponent} from "./openai-image-gen/openai-image-gen.component";
import {GameSearchComponent} from "./game-search/game-search.component";

const routes: Routes = [
  {path: '', redirectTo: 'game-search', pathMatch: 'full'},
  {path: 'game-search', component: GameSearchComponent},
  {path: 'openai-image', component: OpenaiImageGenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
