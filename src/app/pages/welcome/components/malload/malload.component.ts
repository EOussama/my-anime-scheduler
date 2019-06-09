import { Component, OnInit, OnDestroy } from '@angular/core';

import { MalAccountLoaderService } from 'src/app/pages/welcome/services/mal-account-loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-malload',
  templateUrl: './malload.component.html',
  styleUrls: ['./malload.component.scss']
})
export class MALloadComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private malLoader: MalAccountLoaderService
  ) { }

  ngOnInit(): void {
  }
}
