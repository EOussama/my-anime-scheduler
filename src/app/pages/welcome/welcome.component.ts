import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

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
}
