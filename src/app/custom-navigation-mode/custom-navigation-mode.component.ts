import {Component, OnInit} from '@angular/core';
import {CustomNavigationMode} from './custom-navigation-mode';
import {WizardComponent, NavigationMode} from 'angular-archwizard';

@Component({
  selector: 'app-custom-navigation-mode',
  templateUrl: './custom-navigation-mode.component.html',
  styleUrls: ['./custom-navigation-mode.component.css']
})
export class CustomNavigationModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getCustomNavigationMode(): NavigationMode {
    return new CustomNavigationMode();
  }

}
