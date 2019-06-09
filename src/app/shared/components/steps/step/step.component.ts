import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input() content: string = '1'
  @Input() state: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
