import {Component, OnInit, ChangeDetectorRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-wizard-step-ngfor',
  templateUrl: './wizard-step-ngfor.component.html',
  styleUrls: ['./wizard-step-ngfor.component.css']
})
export class WizardStepNgForComponent implements OnInit, AfterViewInit {
  wizardSteps: Array<Object>;

  constructor(private _changeDetectionRef: ChangeDetectorRef) {

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

  ngAfterViewInit(): void {
    // Force another change detection in order to fix the ngFor error
    this._changeDetectionRef.detectChanges();
  }

}
