import { Component, EventEmitter, OnInit, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnChanges {

  @Output("Incrementing") onIncrementing = new EventEmitter<{time: number}>();
  @Output() onStop = new EventEmitter<{}>();
  time: number = 0;
  ref = null;
  constructor() { }

  ngOnInit(): void {
    
  }

  startGame() {
    this.ref = setInterval(() => {
      this.onIncrementing.emit({ time: this.time++ })
    }, 1000);
  }

  ngOnChanges() {
    
  }

  endGame() {
    this.onStop.emit({});
    clearInterval(this.ref);
    this.time = 0;
  }
}
