import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-global-scss',
  templateUrl: './custom-global-scss.component.html',
  styleUrls: ['./custom-global-scss.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomGlobalScssComponent implements OnInit {

  public sampleCss = `
aw-wizard.custom-global-css {
  aw-wizard-navigation-bar.horizontal ul.steps-indicator li {
    &.current .step-indicator {
      border-color: violet !important;
      background-color: violet !important;
    }

    /* ... */
  }
}`.trim();

  public sampleScss = `
// Redefine current step styles via SCSS variables
$aw-colors: map-merge($aw-colors, (
  '_': map-merge(map-get($aw-colors, '_'), (
    'current': (
      'border-color-default': violet,
      'border-color-hover': violet,
      'background-color-default': violet,
      'background-color-hover': violet,
      'symbol-color-default': violet,
      'symbol-color-hover': violet,
    ),
    // If the current step is in 'editing' state, 'editing' state styles will override
    // the 'current' ones, so 'editing' styles should be redefined as well
    'editing': (
      'border-color-default': violet,
      'border-color-hover': violet,
      'background-color-default': violet,
      'background-color-hover': violet,
      'symbol-color-default': violet,
      'symbol-color-hover': violet,
    ),
  ))
)) !global;

aw-wizard.custom-global-scss {
  // Generate styles for our custom wizard
  @include aw-define-styles();
}`.trim();

  public curiousScss = `
aw-wizard.custom-global-scss {
  // Generate styles for our custom wizard
  @include aw-define-styles();
}`.trim();

  constructor() { }

  public ngOnInit() {
  }

}
