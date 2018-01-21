import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardModel} from '../card/card-item/card.model';
import {BoardService} from './board.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mg-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() nrOfCards: number;
  @Output() onNewGameClicked: EventEmitter<void> = new EventEmitter();

  public deckOfCards: CardModel[];
  public firstCard: CardModel;
  public matchCard: CardModel;
  public cardsDisabled = false;
  public nrOfTries: number;
  public winning: boolean;
  public allTimeScore: number;

  constructor(private boardService: BoardService) {

  }

  ngOnInit() {
    this.nrOfTries = 0;
    this.winning = false;
    this.deckOfCards = this.boardService.generateDeckOfCards(this.nrOfCards);
    this.deckOfCards = this.boardService.shuffleArray(this.deckOfCards);
  }

  onCardClicked(card: CardModel) {
    card.status = true;
    if (!this.firstCard) {
      this.firstCard = card;
    } else {
      this.matchCard = card;
      this.cardsDisabled = true;
      setTimeout(() => this.isMatch(), 1500);
    }
  }

  isMatch(): void {
    this.cardsDisabled = false;
    if (this.firstCard.number !== this.matchCard.number) {
      this.firstCard.status = false;
      this.matchCard.status = false;
    }
    this.initSelectedCards();
    this.cardsDisabled = false;
    this.nrOfTries++;
    this.winning = this.boardService.didUserWin(this.deckOfCards);
    if (this.winning) {
      this.allTimeScore = this.boardService.addAllTimeScore(this.nrOfTries);
    }
  }

  initSelectedCards(): void {
    this.firstCard = null;
    this.matchCard = null;
  }

}
