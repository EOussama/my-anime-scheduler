import { Component, OnInit } from '@angular/core';

import { fadeLogo, fadeContent, fadeProgress } from "./animations/animations";

@Component({
  selector: 'app-offline',
  templateUrl: './offline.component.html',
  styleUrls: ['./offline.component.scss'],
  animations: [
    fadeLogo,
    fadeContent,
    fadeProgress
  ]
})
export class OfflineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
