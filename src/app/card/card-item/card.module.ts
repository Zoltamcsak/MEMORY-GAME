import {NgModule} from '@angular/core';
import {CardComponent} from './card.component';
import {MatCardModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    MatCardModule,
    CommonModule,
    MatCardModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule {}
