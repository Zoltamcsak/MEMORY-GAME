import {Injectable} from '@angular/core';
import {CardModel} from '../card/card-item/card.model';

@Injectable()
export class BoardService {
  generateDeckOfCards(nrOfCards: number): CardModel[] {
    const deckOfCards = [];
    for (let i = 0; i < nrOfCards / 2; i++) {
      const card = new CardModel();
      card.number = i;
      const matchCard = new CardModel();
      matchCard.number = i;
      deckOfCards.push(card);
      deckOfCards.push(matchCard);
    }
    return deckOfCards;
  }

  shuffleArray(deckOfCards: CardModel[]) {
    for (let i = deckOfCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]];
    }
    return deckOfCards;
  }
}
