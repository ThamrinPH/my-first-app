import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private routee: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.routee.snapshot.params['id'],
      name: this.routee.snapshot.params['name'],
    }
  }

}
