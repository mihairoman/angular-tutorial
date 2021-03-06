import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  interval: number;
  @Output() intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = window.setInterval(() => {
      this.intervalFired.emit(this.counter++)
    }, 1000)
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
