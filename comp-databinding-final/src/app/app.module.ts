import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game/game-control.component';
import { OddComponent } from './game/odd.component';
import { EvenComponent } from './game/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
