import { Component } from '@angular/core';


import {UserService} from '../../services/user.service';
import {User} from '../../models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson2';


  users: User[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(value => this.users = value);

  }
}
