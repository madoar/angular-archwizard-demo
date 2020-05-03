import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

interface WizardStepDescriptor {
  header: string;
  content: string;
}

@Component({
  selector: 'app-wizard-step-ngfor',
  templateUrl: './wizard-step-ngfor.component.html',
  styleUrls: ['./wizard-step-ngfor.component.css']
})
export class WizardStepNgForComponent implements OnInit {
  public wizardSteps: WizardStepDescriptor[];

  constructor() {

    this.wizardSteps = [
      {
        header: 'Steptitle 1',
        content: 'Content: Step 1'
      },
      {
        header: 'Steptitle 2',
        content: 'Content: Step 2'
      },
      {
        header: 'Steptitle 3',
        content: 'Content: Step 3'
      }
    ];

  }

  ngOnInit() {
  }

}
