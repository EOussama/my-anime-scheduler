import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';
import { MalService } from 'src/app/shared/services/mal.service';
import { Step } from 'src/app/shared/models/step';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-malload',
  templateUrl: './malload.component.html',
  styleUrls: ['./malload.component.scss']
})
export class MALloadComponent implements OnInit {

  /**
   * The loaders
   */
  loaders = {
    MALAccountfetch: false
  }

  constructor(
    private mal: MalService,
    private router: Router,
    private route: ActivatedRoute,
    private malLoader: MalAccountLoaderService
  ) { }

  ngOnInit(): void {
  }
}
