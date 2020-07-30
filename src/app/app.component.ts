import { Component } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  currentURL: string;
  isLoginPage: boolean;
  constructor(
    private appService: AppService,
    private router: Router,
  ) {
    router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.currentURL = event.url;
        this.isLoginPage = this.currentURL.includes('/login') ? true : false
      }
    })
    this.setUserName();

  }

  setUserName() {
    this.appService.refreshUser().subscribe(data => {
      this.title = data;
    })
  }
}
