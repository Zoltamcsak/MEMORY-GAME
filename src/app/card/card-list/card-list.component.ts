import {Component, Input} from '@angular/core';
import {CardModel} from '../card-item/card.model';

@Component({
  selector: 'mg-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() cards: CardModel[];

  constructor() { }

}
