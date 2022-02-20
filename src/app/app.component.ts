import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  second: number = 0;

  onIncremented(timeData) {
    this.second = timeData.time;
  }

  Stopped() {
    this.second = 0;
  }
}
