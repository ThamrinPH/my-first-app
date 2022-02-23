import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers() {
    // Doing coomplex calcilation here
    this.router.navigate(['/servers']);
  }
  
  onLoadServer(id: number) {
    // Doing coomplex calcilation here
    this.router.navigate(
      ['/servers', id, 'edit'], 
      {
        queryParams: {
          allowEditing: 1
        }, 
        fragment: 'loading'
      });
  }
}
