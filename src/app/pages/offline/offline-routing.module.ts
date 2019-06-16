import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { OfflineComponent } from "./offline.component";

const routes: Routes = [
  { path: 'offline', component: OfflineComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OfflineRoutingModule { }
