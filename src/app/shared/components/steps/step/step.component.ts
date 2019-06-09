import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Step } from 'src/app/shared/models/step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() step: Step;

  @ViewChild('stepRef') stepRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const stepElement: HTMLElement = this.stepRef.nativeElement;

    stepElement.style.marginTop = `${this.step.offset}px`;
  }
}
