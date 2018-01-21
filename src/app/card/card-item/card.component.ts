import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CardModel} from './card.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])]
})
export class CardComponent implements OnChanges {
  @Input() card: CardModel;
  public flip = 'inactive';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onCardClicked(): void {
    this.flip = (this.flip === 'inactive') ? 'active' : 'inactive';
  }

}
