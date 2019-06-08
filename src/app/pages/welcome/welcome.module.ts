import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from "@angular/material";

import { WelcomeRoutingModule } from './welcome-routing.module';

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
    WelcomeRoutingModule,
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
