import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineComponent } from './offline.component';
import { OfflineRoutingModule } from './offline-routing.module';

@NgModule({
  declarations: [OfflineComponent],
  imports: [
    CommonModule,
    OfflineRoutingModule
  ],
  exports: [OfflineComponent]
})
export class OfflineModule { }
