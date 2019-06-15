import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';
import { MalService } from 'src/app/shared/services/mal.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-malload',
  templateUrl: './malload.component.html',
  styleUrls: ['./malload.component.scss']
})
export class MALloadComponent implements OnInit {

  /**
   * The loaders
   */
  loaders = {
    MALAccountfetch: false
  }

  loadingForm: FormGroup;
  confirmationForm: FormGroup;

  constructor(
    private mal: MalService,
    private router: Router,
    private route: ActivatedRoute,
    private malLoader: MalAccountLoaderService
  ) { }

  ngOnInit(): void {
    this.loadingForm = new FormGroup({
      username: new FormControl('', [Validators.required], this.MALAccountValidator.bind(this))
    });

    this.confirmationForm = new FormGroup({});
  }

  MALAccountValidator(control: FormControl): Promise<any> | Observable<any> {
    const username: string = (control.value as string).trim();
    let validatorTimer: any = null;

    const promise = new Promise<any>(resolve => {
      clearTimeout(validatorTimer);

      validatorTimer = setTimeout(() => {
        this.mal.isValid(username).subscribe(
          res => {
            console.log('data');
            resolve(null);
          },
          error => {
            console.log('error');
            resolve({ "error": true });
          }
        );
      }, 1000);
    });

    return promise;
  }
}
