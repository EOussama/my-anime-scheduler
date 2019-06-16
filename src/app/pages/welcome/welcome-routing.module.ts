import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from './guards/auth.guard';

import { WelcomeComponent } from './welcome.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { MALloadComponent } from './components/malload/malload.component';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomeComponent, /*canActivate: [AuthGuard],*/ children: [
      { path: '', component: ControlPanelComponent, data: { animation: 'ctrlpanel' } },
      { path: 'malload', component: MALloadComponent, data: { animation: 'malload' } }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
