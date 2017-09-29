import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-css',
  templateUrl: './custom-css.component.html',
  styleUrls: ['./custom-css.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
