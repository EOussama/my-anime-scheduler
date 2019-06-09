import { Component, OnInit, Input } from '@angular/core';
import { Step } from 'src/app/shared/models/step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: Step;

  constructor() { }

  ngOnInit(): void {
  }
}
