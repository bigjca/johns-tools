import { Component, Input, OnInit } from '@angular/core';
import {HowLongToBeatEntry} from "howlongtobeat";
import {HttpClient} from "@angular/common/http";
import {PriceInfo} from "../models/price-info";

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  @Input() gameInfo: HowLongToBeatEntry = {} as HowLongToBeatEntry;
  viewingPrice = false;
  priceInfo: PriceInfo[] = [];
  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit(): void {
  }

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
