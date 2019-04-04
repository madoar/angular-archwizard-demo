import {Component, OnInit} from '@angular/core';
import {CustomNavigationMode} from './custom-navigation-mode';

@Component({
  selector: 'app-custom-navigation-mode',
  templateUrl: './custom-navigation-mode.component.html',
  styleUrls: ['./custom-navigation-mode.component.css']
})
export class CustomNavigationModeComponent implements OnInit {

  customNavigationMode = new CustomNavigationMode();

  constructor() { }

  ngOnInit() {
  }

}
