import { Component, OnInit } from '@angular/core';
import {MovingDirection} from 'angular-archwizard';

@Component({
  selector: 'app-step-enter-event',
  templateUrl: './step-enter-event.component.html',
  styleUrls: ['./step-enter-event.component.css']
})
export class StepEnterEventComponent implements OnInit {
  public counter1 = 0;
  public counter2 = 0;
  public counter3 = 0;

  constructor() { }

  increaseCounter1(direction: MovingDirection): void {
    this.counter1 += 1;
  }

  increaseCounter2(direction: MovingDirection): void {
    this.counter2 += 1;
  }

  increaseCounter3(direction: MovingDirection): void {
    this.counter3 += 1;
  }

  ngOnInit() {
  }

}
