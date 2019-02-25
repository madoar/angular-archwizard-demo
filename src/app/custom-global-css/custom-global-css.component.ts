import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-global-css',
  templateUrl: './custom-global-css.component.html',
  styleUrls: ['./custom-global-css.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomGlobalCssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
