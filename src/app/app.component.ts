import { Component, OnInit } from '@angular/core';
import { create } from 'pkce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-anime-scheduler';

  ngOnInit(): void {
    const codePair = create();
    console.log({ codePair });
  }
}
