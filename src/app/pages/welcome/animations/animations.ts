import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeLogo = trigger('fadeLogo', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      transform: 'translateY(50px)',
      opacity: 0
    }),
    animate('0.8s ease-in-out')
  ])
]);

export const fadeSubtitle = trigger('fadeSubtitle', [
  state('in', style({ opacity: '1' })),
  transition('void => in', [
    style({
      transform: 'translateY(20px)',
      opacity: 0
    }),
    animate('0.5s 0.3s ease-in-out')
  ])
]);
