import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, stagger } from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('fadeLogo', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          transform: 'translateY(50px)',
          opacity: 0
        }),
        animate('1s ease-in-out')
      ])
    ]),
    trigger('fadeSubtitle', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          transform: 'translateY(20px)',
          opacity: 0
        }),
        animate('0.6s 0.8s ease-in-out')
      ])
    ]),
    trigger('fadeLoadButton', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          transform: 'translateY(20px)',
          opacity: 0
        }),
        animate('0.6s 1s ease-in-out')
      ])
    ]),
    trigger('fadePermButton', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          transform: 'translateY(20px)',
          opacity: 0
        }),
        animate('0.6s 1.3s ease-in-out')
      ])
    ]),
    trigger('fadeStartButton', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          transform: 'translateY(20px)',
          opacity: 0
        }),
        animate('0.6s 1.6s ease-in-out')
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  requiredSteps = {
    MALAccount: false,
    permission: false
  };

  constructor() { }

  ngOnInit(): void {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('TODO let use know');
        } else {
          console.log('Revoke access');
        }
      });
    }
  }

  loadMALAccount(): void {
    this.requiredSteps.MALAccount = true;
  }

  grantPermission(): void {
    this.requiredSteps.permission = true;
  }

  onStartClicked(): void {

  }

  isExtReady(): boolean {
    return this.requiredSteps.MALAccount === true && this.requiredSteps.permission === true;
  }
}
