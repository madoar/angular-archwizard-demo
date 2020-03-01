import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  subMenuList: Array<string> = [];

  constructor(private router: Router) {
  }

  isInFunction(functionName: string): boolean {
    const currentUrl = this.router.url;

    this.subMenuList = [];

    if (this.subMenuList.indexOf(currentUrl) === -1) {
      this.subMenuList.push(currentUrl)
    }

    return this.subMenuList.find(url => url.startsWith('/' + functionName)) !== undefined;
  }

  ngOnInit() {
  }
}
