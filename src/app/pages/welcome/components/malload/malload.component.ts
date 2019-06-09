import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';
import { MalService } from 'src/app/shared/services/mal.service';
import { Step } from 'src/app/shared/models/step';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-malload',
  templateUrl: './malload.component.html',
  styleUrls: ['./malload.component.scss']
})
export class MALloadComponent implements OnInit {

  /**
   * MAL user loading steps
   */
  steps: Step[] = [
    new Step('1'),
    new Step('2', 100),
    new Step('3', 100)
  ]

  /**
   * The loaders
   */
  loaders = {
    MALAccountfetch: false
  }

  constructor(
    private mal: MalService,
    private router: Router,
    private route: ActivatedRoute,
    private malLoader: MalAccountLoaderService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Handles the loading if the input MAL user
   * 
   * @param MALUsernameRef The MAL username input
   */
  onMALAccountLoadClicked(MALUsernameRef: HTMLInputElement): void {
    const username: string = MALUsernameRef.value.trim();

    if (username.length > 0) {
      this.loaders.MALAccountfetch = true;
      this.mal.isValid(username).subscribe(
        (data) => {
          this.loaders.MALAccountfetch = false;
          console.log("Exists");
        },
        (error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.loaders.MALAccountfetch = false;
            console.log('Doesn\'t exists');
          }
        }
      )
    }
  }
}
