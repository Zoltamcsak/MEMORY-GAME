import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CardModule} from './card/card.module';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {StartGameModule} from './start-game/start-game.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BoardModule} from './board/board.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    MatCardModule,
    StartGameModule,
    MatSelectModule,
    BrowserAnimationsModule,
    BoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
