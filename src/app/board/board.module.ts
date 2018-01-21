import {NgModule} from '@angular/core';
import {BoardComponent} from './board.component';
import {BoardService} from './board.service';
import {CardModule} from '../card/card.module';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    MatButtonModule,
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
