import {   
  Component,
  OnInit,
  Input,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, DoCheck {
  @Input() time;
  logs = [];

  constructor() {
    
  }
  ngOnInit() {
    
  }

  ngDoCheck() {
    if(this.time%2 == 1 && this.time !== 0) this.logs.push(this.time)
  }

}
