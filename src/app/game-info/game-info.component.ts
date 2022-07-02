import { Component, Input, OnInit } from '@angular/core';
import {GameInfo} from "../models/game-info";

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {

  @Input() gameInfo: GameInfo = {};
  constructor() { }

  ngOnInit(): void {
  }

}
