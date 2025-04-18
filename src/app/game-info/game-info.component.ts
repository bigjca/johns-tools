import {Component, inject, Input} from '@angular/core';
import {PriceInfo} from "../models/price-info";
import {HttpClient} from "@angular/common/http";
import {CurrencyPipe, DecimalPipe} from "@angular/common";
import {HowLongToBeatEntry} from "howlongtobeat-ts";

@Component({
    selector: 'app-game-info',
    imports: [CurrencyPipe, DecimalPipe],
    templateUrl: './game-info.component.html',
    styleUrl: './game-info.component.css'
})
export class GameInfoComponent {
  @Input() gameInfo: HowLongToBeatEntry = {} as HowLongToBeatEntry;
  viewingPrice = false;
  priceInfo: PriceInfo[] = [];
  private readonly httpClient = inject(HttpClient);

  onImageClick(): void {
    this.viewingPrice = true;
    const params = {title: this.gameInfo.name};
    if(this.priceInfo.length === 0) {
      this.httpClient.get<PriceInfo[]>('/.netlify/functions/price', {params}).subscribe(res => {
        this.priceInfo = res;
      });
    }
  }
}
