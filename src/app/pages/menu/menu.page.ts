import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public mainPages = [
    { title: 'Dashboard', url: '/menu/master-list', icon: 'bar-chart' },
    { title: 'Photos', url: '/', icon: 'image' },
    { title: 'Available Missions', url: '/', icon: 'book' },
    { title: 'My Missions', url: '/', icon: 'book' },
    { title: 'Chat', url: '/', icon: 'chatbox' }
  ];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public signOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/sign-in');
  }

}
