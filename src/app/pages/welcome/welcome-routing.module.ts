import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from './welcome.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { MALloadComponent } from './components/malload/malload.component';

const routes: Routes = [
  {
    path: 'welcome', component: WelcomeComponent, children: [
      { path: '', component: ControlPanelComponent },
      { path: 'malload', component: MALloadComponent }
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
