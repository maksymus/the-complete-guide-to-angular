import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  @Input() users: string[];

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
