import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-global-scss',
  templateUrl: './custom-global-scss.component.html',
  styleUrls: ['./custom-global-scss.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomGlobalScssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
