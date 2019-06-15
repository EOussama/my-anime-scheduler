import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';
import { MalService } from 'src/app/shared/services/mal.service';
import { promise } from 'protractor';
import { MatStepper } from '@angular/material';

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
  };

  /**
   * Validators
   */
  validators = {
    MALLAccountFetch: {
      invalidMALAccount: false
    }
  };

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
      username: new FormControl('', [Validators.required,])
    });

    this.confirmationForm = new FormGroup({});
  }

  onAccountLoadClicked(stepper: MatStepper): void {
    const username: string = this.loadingForm.value['username'];

    this.loaders.MALAccountfetch = true;

    this.mal.isValid(username).subscribe(
      res => {
        this.loadingForm.controls['username'].setErrors(null);
        this.loaders.MALAccountfetch = false;
        stepper.next();

        console.log(res);
      },
      error => {
        this.loadingForm.controls['username'].setErrors({ 'invalid-username': true });
        this.validators.MALLAccountFetch.invalidMALAccount = true;
        this.loaders.MALAccountfetch = false;

        console.log(error);
      }
    );
  }
}
