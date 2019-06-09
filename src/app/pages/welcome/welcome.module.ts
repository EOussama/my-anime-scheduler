import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from "@angular/material";

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { RequirementBtnComponent } from './../../shared/components/requirement-btn/requirement-btn.component';
import { MALloadComponent } from './components/malload/malload.component';
import { StateService } from './services/state.service';
import { StepsComponent } from 'src/app/shared/components/steps/steps.component';
import { StepComponent } from 'src/app/shared/components/steps/step/step.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ControlPanelComponent,
    MALloadComponent,
    RequirementBtnComponent,
    StepsComponent,
    StepComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    WelcomeRoutingModule,
  ],
  providers: [StateService],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
