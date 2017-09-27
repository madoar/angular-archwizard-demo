import {Component, OnInit} from '@angular/core';
import {MovingDirection} from 'ng2-archwizard';

@Component({
  selector: 'app-can-enter-event',
  templateUrl: './can-enter-event.component.html',
  styleUrls: ['./can-enter-event.component.css']
})
export class CanEnterEventComponent implements OnInit {

  public canEnterStep1 = true;

  public canEnterStep2Backwards = true;
  public canEnterStep2Forwards = true;

  public canEnterStep3 = true;

  public canEnterStep2: (MovingDirection) => boolean = (direction) => {
    console.log(direction);
    console.log(this.canEnterStep2Backwards);
    console.log(this.canEnterStep2Forwards);
    switch (direction) {
      case MovingDirection.Forwards:
        return this.canEnterStep2Forwards;
      case MovingDirection.Backwards:
        return this.canEnterStep2Backwards;
      case MovingDirection.Stay:
        return true;
    }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
