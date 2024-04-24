import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Init } from 'v8';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  isLoggedIn = true;
  username: string = '';
  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      
      const datauser = this.storageService.getUser().data;
      try {
       this.username = datauser.username

      } catch (error) {
        console.error('Error parsing roles:', error);
      }
    }
  }

logout() {
  this.storageService.clean();
  this.router.navigateByUrl('/login')
}

}
