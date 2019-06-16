import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeLogo = trigger('fadeLogo', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      transform: 'translateY(20px)',
      opacity: 0
    }),
    animate('0.4s ease-in-out')
  ])
]);

export const fadeContent = trigger('fadeContent', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      transform: 'translateY(20px)',
      opacity: 0
    }),
    animate('0.4s 0.1s ease-in-out')
  ])
]);

export const fadeProgress = trigger('fadeProgress', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      transform: 'translateY(20px)',
      opacity: 0
    }),
    animate('0.4s 0.2s ease-in-out')
  ])
]);

