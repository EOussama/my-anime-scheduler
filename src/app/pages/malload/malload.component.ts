import { Component, OnInit } from '@angular/core';

import { MalAccountLoaderService } from 'src/app/shared/services/mal-account-loader.service';

@Component({
  selector: 'app-malload',
  templateUrl: './malload.component.html',
  styleUrls: ['./malload.component.scss']
})
export class MALloadComponent implements OnInit {

  constructor(private malLoader: MalAccountLoaderService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.malLoader.onMALAccountLoaded(true);
  }
}
