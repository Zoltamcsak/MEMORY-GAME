import {NgModule} from '@angular/core';
import {CardComponent} from './card-item/card.component';
import {MatCardModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {CardListComponent} from './card-list/card-list.component';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    MatCardModule
  ],
  declarations: [
    CardComponent,
    CardListComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule {}
