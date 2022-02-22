import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  ngOnInit(): void {
      this.users = this.usersService.activeUsers;
  }
  
  constructor(private usersService: UsersService) {
    
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.usersService.userStatusUpdated.emit(id)
  }
}
