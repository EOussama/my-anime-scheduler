import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StateService } from './services/state.service';

import { fadeLogo, fadeSubtitle } from "./animations/animations";
import { routeAnimation } from "./animations/routing-animations";
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    fadeLogo,
    fadeSubtitle,
    routeAnimation
  ]
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor(
    private core: CoreService,
    private state: StateService
  ) { }

  ngOnInit(): void {
    this.state.requiredSteps.MALAccount = this.core.account.username !== '';
    this.state.requiredSteps.permission = Notification.permission === 'granted';
  }

  ngOnDestroy(): void {
    this.state.malLoaderSubscription.unsubscribe();
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
