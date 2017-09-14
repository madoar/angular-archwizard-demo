import {Component, OnInit} from '@angular/core';
import {MovingDirection} from 'ng2-archwizard';

@Component({
  selector: 'app-can-exit-event',
  templateUrl: './can-exit-event.component.html',
  styleUrls: ['./can-exit-event.component.css']
})
export class CanExitEventComponent implements OnInit {

  public canExitStep1 = true;

  public canExitStep2Backwards = true;
  public canExitStep2Forwards = true;

  public canExitStep3 = true;

  public canExitStep2: (MovingDirection) => boolean = (direction) => {
    console.log(direction);
    console.log(this.canExitStep2Backwards);
    console.log(this.canExitStep2Forwards);
    switch (direction) {
      case MovingDirection.Forwards:
        return this.canExitStep2Forwards;
      case MovingDirection.Backwards:
        return this.canExitStep2Backwards;
      case MovingDirection.Stay:
        return true;
    }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
