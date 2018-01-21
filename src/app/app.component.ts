import {Component} from '@angular/core';
import {CardModel} from './card/card-item/card.model';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public card = new CardModel();
  constructor() {
    this.card.number = 4;
  }
}
