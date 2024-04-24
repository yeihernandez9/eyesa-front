import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent{
  isLoggedIn = true;
  token: string = '';
  users: any[] = [];
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private storageService: StorageService,
    private userService: UserService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      
      const token = this.storageService.getUser().token;
      try {
       this.token = token

      } catch (error) {
        console.error('Error parsing roles:', error);
      }
    }

    this.getUser();
  }
  getUser() {
    console.log(this.token)
    this.userService.getUser(this.token).subscribe({
      next: data => {
        console.log('DATA: ',data.data)
        this.users = data.data
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }



}
