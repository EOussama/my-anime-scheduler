import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { StateService } from './services/state.service';

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
        animate('0.8s ease-in-out')
      ])
    ]),
    trigger('fadeSubtitle', [
      state('in', style({ opacity: '1' })),
      transition('void => in', [
        style({
          transform: 'translateY(20px)',
          opacity: 0
        }),
        animate('0.5s 0.3s ease-in-out')
      ])
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(
    private state: StateService
  ) { }

  ngOnInit(): void {
    this.state.requiredSteps.permission = Notification.permission === 'granted';
  }
}
