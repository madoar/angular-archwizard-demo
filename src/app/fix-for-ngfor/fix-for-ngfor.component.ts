import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-fix-for-ngfor',
  templateUrl: './fix-for-ngfor.component.html',
  styleUrls: ['./fix-for-ngfor.component.css']
})

export class FixForNgforComponent implements OnInit {
	wizardSteps: Array<number>;

	  constructor(private _changeDetectionRef : ChangeDetectorRef) {

		this.wizardSteps = [1,2,3];

	  }

	  	ngOnInit() { }

	  	ngAfterViewInit() : void {
		    // Force another change detection in order to fix the ngFor error
		    this._changeDetectionRef.detectChanges();
		}

}
