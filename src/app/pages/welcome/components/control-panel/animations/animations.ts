import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideUp = trigger('slideUp', [
  transition('void => in', [
    style({
      transform: 'translateY(20px)',
      opacity: 0
    }),
    animate('0.5s 0.5s ease-in-out')
  ])
]);

export const fadeLoadButton = trigger('fadeLoadButton', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      opacity: 0
    }),
    animate('0.5s 0.4s ease-in-out')
  ])
]);

export const fadePermButton = trigger('fadePermButton', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      opacity: 0
    }),
    animate('0.5s 0.5s ease-in-out')
  ])
]);

export const fadeStartButton = trigger('fadeStartButton', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      opacity: 0
    }),
    animate('0.5s 0.6s ease-in-out')
  ])
]);
