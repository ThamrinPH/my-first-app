import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  @Input() time;
  logs = [];

  constructor() {
    
  }
  ngOnInit() {
    
  }

  ngDoCheck() {
    if(this.time%2 == 0 && this.time !== 0) this.logs.push(this.time)
  }

}
