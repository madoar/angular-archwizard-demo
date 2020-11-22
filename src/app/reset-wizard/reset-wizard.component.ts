import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-wizard',
  templateUrl: './reset-wizard.component.html',
  styleUrls: ['./reset-wizard.component.css']
})
export class ResetWizardComponent implements OnInit {

  public resetCount = 0;

  constructor() { }

  public ngOnInit() {
  }

  public finalizeReset(): void {
    this.resetCount += 1;
  }
}
