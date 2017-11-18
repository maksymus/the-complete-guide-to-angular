import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalEvent = new EventEmitter<number>();

  interval;
  count: number = 0;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.interval = setInterval(() => {
      this.intervalEvent.emit(this.count++);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.count = 0;
  }
}
