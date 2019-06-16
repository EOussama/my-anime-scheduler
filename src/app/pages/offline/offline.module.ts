import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule, MatProgressBar, MatProgressBarModule } from '@angular/material';
import { OfflineRoutingModule } from './offline-routing.module';

import { OfflineComponent } from './offline.component';

@NgModule({
  declarations: [OfflineComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressBarModule,
    OfflineRoutingModule
  ],
  exports: [OfflineComponent]
})
export class OfflineModule { }
