import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { StateService } from '../../services/state.service';
import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';

import { slideUp, fadeLoadButton, fadePermButton, fadeStartButton } from './animations/animations'
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  animations: [
    slideUp,
    fadeLoadButton,
    fadePermButton,
    fadeStartButton
  ]
})
export class ControlPanelComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private core: CoreService,
    private malLoader: MalAccountLoaderService,
    public state: StateService
  ) { }

  ngOnInit(): void {
    this.state.malLoaderSubscription = this.malLoader.loadMALAccount().subscribe((accountLoaded: string) => {
      this.state.requiredSteps.MALAccount = accountLoaded !== '';
      this.core.account.confirmed = accountLoaded !== '';
      this.core.account.username = accountLoaded;

      console.info('[MAS] MAL Account loaded!');
      this.core.saveData();
    });
  }

  loadMALAccount(): void {
    this.router.navigate(['malload'], { relativeTo: this.route });
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
    this.router.navigate(['/home']);
  }

  isExtReady(): boolean {
    return this.state.requiredSteps.MALAccount === true && this.state.requiredSteps.permission === true;
  }
}
