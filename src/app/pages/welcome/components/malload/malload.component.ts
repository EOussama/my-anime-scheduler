import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';
import { Step } from 'src/app/shared/models/step';

@Component({
  selector: 'app-malload',
  templateUrl: './malload.component.html',
  styleUrls: ['./malload.component.scss']
})
export class MALloadComponent implements OnInit {

  steps: Step[] = [
    new Step('1'),
    new Step('2', 40),
    new Step('3', 40)
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private malLoader: MalAccountLoaderService
  ) { }

  ngOnInit(): void {
  }
}
