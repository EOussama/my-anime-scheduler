import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-requirement-btn',
  templateUrl: './requirement-btn.component.html',
  styleUrls: ['./requirement-btn.component.scss']
})
export class RequirementBtnComponent implements OnInit {

  @Output() onClickEvent: EventEmitter<any> = new EventEmitter();

  @Input('prop-text') text: string = 'Click me!';
  @Input('prop-true-icon') trueIcon: string = 'check_circle';
  @Input('prop-false-icon') falseIcon: string = 'info';
  @Input('prop-state') state: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onClickEvent.emit();
  }
}
