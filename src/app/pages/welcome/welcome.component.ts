import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StateService } from './services/state.service';

import { fadeLogo, fadeSubtitle } from "./animations/animations";
import { routeAnimation } from "./animations/routing-animations";

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
export class WelcomeComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
    this.state.requiredSteps.permission = Notification.permission === 'granted';
  }

  prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
