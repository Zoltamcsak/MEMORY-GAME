import {Component, Input} from '@angular/core';
import {CardModel} from './card.model';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: CardModel;

  constructor() { }

  onCardClicked(): void {
    this.card.status = !this.card.status;
  }

}
