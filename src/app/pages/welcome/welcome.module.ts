import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatStepperModule, MatDividerModule } from "@angular/material";

import { WelcomeRoutingModule } from './welcome-routing.module';

import { StateService } from './services/state.service';
import { MalAccountLoaderService } from './services/mal-account-loader.service';

import { WelcomeComponent } from './welcome.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { RequirementBtnComponent } from './../../shared/components/requirement-btn/requirement-btn.component';
import { MALloadComponent } from './components/malload/malload.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ControlPanelComponent,
    MALloadComponent,
    RequirementBtnComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatDividerModule,
    ReactiveFormsModule,
    WelcomeRoutingModule,
  ],
  providers: [StateService, MalAccountLoaderService],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
