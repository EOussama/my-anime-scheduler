import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { CoreService } from './shared/services/core.service';
import { ConnectionService } from "ng-connection-service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   * Internet connection subscription
   */
  connectionSubscription: Subscription;

  constructor(private core: CoreService, private router: Router, private connection: ConnectionService) { }

  ngOnInit(): void {
    this.core.database.getData().then((db) => {
      this.core.loadData(db);
    });

    this.connectionSubscription = this.connection.monitor().subscribe(status => {
      if (!status) {
        this.router.navigate(['/offline']);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy(): void {
    this.connectionSubscription.unsubscribe();
  }
}
