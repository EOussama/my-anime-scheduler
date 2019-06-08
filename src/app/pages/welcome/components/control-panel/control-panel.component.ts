import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { StateService } from '../../services/state.service';
import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  animations: [
    trigger('fadeLoadButton', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          opacity: 0
        }),
        animate('0.5s 0.4s ease-in-out')
      ])
    ]),
    trigger('fadePermButton', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          opacity: 0
        }),
        animate('0.5s 0.5s ease-in-out')
      ])
    ]),
    trigger('fadeStartButton', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          opacity: 0
        }),
        animate('0.5s 0.6s ease-in-out')
      ])
    ])
  ]
})
export class ControlPanelComponent implements OnInit {

  /**
  * The MAL loader subscription
  */
  private malLoaderSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private malLoader: MalAccountLoaderService,
    public state: StateService
  ) { }

  ngOnInit(): void {
    this.malLoaderSubscription = this.malLoader.loadMALAccount().subscribe((accountLoaded: boolean) => {
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
    this.malLoaderSubscription.unsubscribe();
  }

  isExtReady(): boolean {
    return this.state.requiredSteps.MALAccount === true && this.state.requiredSteps.permission === true;
  }
}
