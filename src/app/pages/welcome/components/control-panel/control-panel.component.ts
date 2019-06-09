import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { StateService } from '../../services/state.service';
import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';

import { fadeLoadButton, fadePermButton, fadeStartButton } from './animations/animations'

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  animations: [
    fadeLoadButton,
    fadePermButton,
    fadeStartButton
  ]
})
export class ControlPanelComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private malLoader: MalAccountLoaderService,
    public state: StateService
  ) { }

  ngOnInit(): void {
    this.state.malLoaderSubscription = this.malLoader.loadMALAccount().subscribe((accountLoaded: boolean) => {
      this.state.requiredSteps.MALAccount = accountLoaded;
    });
  }

  loadMALAccount(): void {
    this.router.navigate(['malload'], { relativeTo: this.route });
    console.info('[MAS] MAL Account loaded!');
  }

  grantPermission(): void {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.info('[MAS] Notifications permission granted!');
        this.state.requiredSteps.permission = true;
      } else {
        console.warn('You must grant notifications permission in order for MAS to work properly!');
        this.state.requiredSteps.permission = false;
      }
    });
    if (Notification.permission !== "granted") {
      this.state.requiredSteps.permission = false;
    }
  }

  onStartClicked(): void {
    console.log('Get started');
  }

  isExtReady(): boolean {
    return this.state.requiredSteps.MALAccount === true && this.state.requiredSteps.permission === true;
  }
}
