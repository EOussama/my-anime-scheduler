import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';
import { MalService } from 'src/app/shared/services/mal.service';

import { MatStepper } from '@angular/material';
import { CoreService } from 'src/app/shared/services/core.service';

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
    MALAccountfetch: false,
    MALAccountConfirm: false
  };

  /**
   * Validators
   */
  validators = {
    MALLAccountFetch: false
  };

  /**
   * The validation forms
   */
  loadingForm: FormGroup;
  confirmationForm: FormGroup;

  /**
   * The confirmation key
   */
  confirmationKey: string;

  constructor(
    private core: CoreService,
    private mal: MalService,
    private malLoader: MalAccountLoaderService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadingForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(16)])
    });

    this.confirmationForm = new FormGroup({
      confirmation: new FormControl(false, this.confirmationValidator)
    });

    // Getting the confirmation key
    this.confirmationKey = this.core.settings.account.key;
  }

  /**
   * Handles MAL accounts validation
   * 
   * @param stepper The stepper element
   */
  onAccountLoadClicked(stepper: MatStepper): void {
    const username: string = this.loadingForm.value['username'];

    this.loaders.MALAccountfetch = true;

    this.mal.isValid(username).subscribe(
      res => {
        this.loadingForm.controls['username'].setErrors(null);
        this.loaders.MALAccountfetch = false;
        stepper.next();
      },
      error => {
        this.loadingForm.controls['username'].setErrors({ 'invalid-username': true });
        this.validators.MALLAccountFetch = true;
        this.loaders.MALAccountfetch = false;
      }
    );
  }

  /**
   * Handles MAL accounts confirmation
   * 
   * @param stepper The stepper element
   */
  onAccountConfirmClicked(stepper: MatStepper): void {
    const username: string = this.loadingForm.value['username'];

    this.loaders.MALAccountConfirm = true;

    this.mal.confirmAccount(username, this.confirmationKey)
      .then(res => {
        if (res === true) {
          this.confirmationForm.controls['confirmation'].setErrors(null);
          this.loaders.MALAccountConfirm = false;
          stepper.next();
        } else {
          this.confirmationForm.controls['confirmation'].setErrors({ 'confirmed': true });
          this.loaders.MALAccountConfirm = false;
        }
      })
      .catch(error => {
        this.confirmationForm.controls['confirmation'].setErrors({ 'confirmed': true });
        this.loaders.MALAccountConfirm = false;
      });
  }

  /**
   * Validates the MAL account confirmation step
   * 
   * @param control The control to validate
   */
  confirmationValidator(control: FormControl): { [s: string]: boolean } {
    return { 'confirmed': control.value === true };
  }
}
