import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WizardComponent } from 'angular-archwizard';

@Component({
  selector: 'app-inner-wizard',
  templateUrl: './inner-wizard.component.html',
  styleUrls: ['./inner-wizard.component.css']
})
export class InnerWizardComponent implements OnInit {

  @Input()
  public outerWizard: WizardComponent;

  @ViewChild('innerWizard')
  public innerWizard: WizardComponent;

  constructor() { }

  public ngOnInit() {
  }

  public outerNext(event): void {
    this.outerWizard.goToNextStep();
  }

  public reset(): void {
    this.innerWizard.reset();
  }
}
