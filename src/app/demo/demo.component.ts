import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

/**
 * A language direction type, which can be either 'ltr' (left-to-right) or 'rtl' (right-to-left)
 */
type langDir = 'ltr' | 'rtl';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @ViewChild('main') public mainRef: ElementRef<HTMLElement>;

  public dir: langDir = 'ltr';

  public subMenuList: Array<string> = [];

  constructor(
    private router: Router
  ) {}

  public isInFunction(functionName: string): boolean {
    const currentUrl = this.router.url;

    this.subMenuList = [];

    if (this.subMenuList.indexOf(currentUrl) === -1) {
      this.subMenuList.push(currentUrl);
    }

    return this.subMenuList.find(url => url.startsWith('/' + functionName)) !== undefined;
  }

  public ngOnInit() {
  }

  /**
   * Updates the dir variable and the direction of the main html element
   *
   * Note: The direction change only affects the demo examples direction not all the page
   *
   * @param dir The updated direction. can be either 'ltr' (left-to-right) or 'rtl' (right-to-left)
   */
  public changeDirTo(dir: langDir): void {
    this.dir = dir;
    this.mainRef.nativeElement.dir = dir;
  }
}
