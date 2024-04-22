import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { IUser } from '../models/User';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  user!: IUser;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (response) => {
        if (response)
        {
          this.users = response;
        }
      },
    });
  }
}