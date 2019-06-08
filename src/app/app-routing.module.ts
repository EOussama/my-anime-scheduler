import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MALloadComponent } from './pages/malload/malload.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'malload', component: MALloadComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
