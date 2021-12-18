import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public mainPages = [
    { title: 'Dashboard', url: 'mission-list', icon: 'bar-chart' },
    { title: 'Photos', url: '/main', icon: 'image' },
    { title: 'Available Missions', url: '/main', icon: 'book' },
    { title: 'My Missions', url: '/main', icon: 'book' },
    { title: 'Chat', url: '/main', icon: 'chatbox' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
