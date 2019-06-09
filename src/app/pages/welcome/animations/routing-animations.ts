import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const routeAnimation = trigger('routeAnimations', [
  transition('ctrlpanel <=> malload', [
    query(':enter', [
      style({
        opacity: '0',
        transform: 'translateY(-100px)'
      })
    ]),
    query(':leave', [
      animate('300ms ease-out', style({
        opacity: '0',
        transform: 'translateY(100px)'
      }))
    ]),
    query(':enter', [
      animate('300ms ease-out', style({
        opacity: '1',
        transform: 'translateY(0px)'
      }))
    ])
  ])
]);
