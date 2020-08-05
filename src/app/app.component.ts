import { Component } from '@angular/core';
import { Router, Event, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import {FacebookService, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuaTangMeLamV2';
  public loading:boolean;
  private initFacebookService(): void {
    const initParams: InitParams = {
      xfbml:true, version:'v8.0'};
      this.facebookService.init(initParams);
    }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError){
        this.loading = false;
      }
  }
  constructor(private router: Router, private facebookService: FacebookService) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit(): void {
    this.initFacebookService();
  }
}
