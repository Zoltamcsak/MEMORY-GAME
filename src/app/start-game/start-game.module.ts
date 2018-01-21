import {NgModule} from '@angular/core';
import {StartGameComponent} from './start-game.component';
import {MatButtonModule,  MatSelectModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BoardModule} from '../board/board.module';

@NgModule({
  imports: [
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    BoardModule
  ],
  declarations: [
    StartGameComponent
  ],
  exports: [
    StartGameComponent
  ]
})
export class StartGameModule {}
