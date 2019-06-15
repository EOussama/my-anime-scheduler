import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { CoreService } from './shared/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Anime Scheduler';

  constructor(private core: CoreService) { }

  ngOnInit(): void {
    this.core.database.getData().then((db) => {
      this.core.loadData(db);
    });
  }
}
