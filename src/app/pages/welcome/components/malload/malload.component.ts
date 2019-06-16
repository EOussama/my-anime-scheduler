import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
   * Loaded MAL account
   */
  account = {
    username: '',
    profile: '',
    picture: ''
  };

  /**
   * The loaders
   */
  loaders = {
    MALAccountFetch: false,
    MALAccountConfirm: false
  };

  /**
   * Validators
   */
  validators = {
    MALAccountFetch: false
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

  /**
   * Helper functions
   */
  helpers = {
    load: {
      ngClass: {
        invalid: () => this.loadingForm.controls['username'].invalid && this.loadingForm.touched
      },
      disabled: () => this.loadingForm.controls['username'].invalid || this.loaders.MALAccountFetch,
      text: () => this.loaders.MALAccountFetch ? 'Loading...' : 'Load MAL account'
    },
    confirm: {
      text: () => this.loaders.MALAccountConfirm ? 'Confirming...' : 'Confirm MAL account'
    }
  };

  constructor(
    private core: CoreService,
    private mal: MalService,
    private malLoader: MalAccountLoaderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadingForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]),
      confirmation: new FormControl(false, this.loadValidator.bind(this))
    });

    this.confirmationForm = new FormGroup({
      confirmation: new FormControl(false, this.confirmationValidator)
    });

    // Getting the confirmation key
    this.confirmationKey = this.core.account.key;
  }

  /**
   * Handles MAL accounts validation
   * 
   * @param stepper The stepper element
   */
  onAccountLoadClicked(stepper: MatStepper): void {
    const username: string = this.loadingForm.value['username'];

    this.loaders.MALAccountFetch = true;

    this.mal.isValid(username).subscribe(
      res => {
        this.loadingForm.controls['username'].setErrors(null);
        this.loadingForm.controls['confirmation'].setErrors(null);
        this.validators.MALAccountFetch = true;
        this.loaders.MALAccountFetch = false;

        this.account.username = res['username'];
        this.account.profile = res['url'];
        this.account.picture = res['image_url'];

        stepper.next();
      },
      error => {
        this.loadingForm.controls['username'].setErrors({ 'invalid-username': true });
        this.loadingForm.controls['confirmation'].setErrors({ 'confirmed': true });
        this.validators.MALAccountFetch = false;
        this.loaders.MALAccountFetch = false;
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
   * Handles MAL accounts verification
   */
  onAccountDoneClicked(): void {
    this.malLoader.onMALAccountLoaded(this.loadingForm.value['username']);
    this.router.navigate(['/welcome']);
  }

  /**
   * Resets the stepper
   * 
   * @param stepper The stepper to reset
   */
  onStepperResetClicked(stepper: MatStepper): void {
    this.loaders.MALAccountFetch = false;
    this.loaders.MALAccountConfirm = false;
    this.validators.MALAccountFetch = false;

    stepper.reset();
  }

  /**
   * Validates the MAL account load steps
   * 
   * @param control The control to validate
   */
  loadValidator(control: FormControl): { [s: string]: boolean } {
    return { 'confirmed': control.value === true };
  }

  /**
   * Validates the MAL account confirmation steps
   * 
   * @param control The control to validate
   */
  confirmationValidator(control: FormControl): { [s: string]: boolean } {
    return { 'confirmed': control.value === true };
  }
}
