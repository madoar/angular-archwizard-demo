import { Component, OnInit } from '@angular/core';
import {MovingDirection} from 'ng2-archwizard';

@Component({
  selector: 'app-step-exit-event',
  templateUrl: './step-exit-event.component.html',
  styleUrls: ['./step-exit-event.component.css']
})
export class StepExitEventComponent implements OnInit {
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
