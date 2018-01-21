import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mg-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  public nrOfCards: number;
  public nrCardsOptions: number[];

  constructor() {
    this.nrCardsOptions = this.getNrCardOptions();
  }

  getNrCardOptions(): number[] {
    const nrCardOptions = [];
    for (let i = 6; i <= 20; i++) {
      if (i % 2 === 0) {
        nrCardOptions.push(i);
      }
    }
    return nrCardOptions;
  }

  ngOnInit() {
  }

}
