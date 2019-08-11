import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurable-navigation-mode',
  templateUrl: './configurable-navigation-mode.component.html',
  styleUrls: ['./configurable-navigation-mode.component.css']
})
export class ConfigurableNavigationModeComponent implements OnInit {

  navigateBackward: 'allow'|'deny' = 'allow';
  navigateForward: 'allow'|'deny'|'visited' = 'deny';

  constructor() { }

  ngOnInit() {
  }

}
