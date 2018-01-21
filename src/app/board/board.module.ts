import {NgModule} from '@angular/core';
import {BoardComponent} from './board.component';
import {BoardService} from './board.service';
import {CardModule} from '../card/card.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CardModule,
    CommonModule
  ],
  declarations: [
    BoardComponent
  ],
  providers: [
    BoardService
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule {}
