import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  isDesktop;
  winWidth = this.getWindowWidth();
  menuItem;
  menuIcon;
  pathName = window.location.pathname.split('/');
  path = this.pathName[this.pathName.length - 1] || '';
  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    this.onResize();
  }

  constructor(  ) {
  }

  ngOnInit() {
    this.setIsDesktop();
  }

  getWindowWidth(): number {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  setIsDesktop(): any {
    if (this.winWidth >= 992) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
  }

  onResize(){
    this.winWidth = this.getWindowWidth();
    if (this.winWidth >= 992) {
      this.isDesktop = true;
    } else {
      this.isDesktop = false;
    }
  }

  onMenuClick() {
    this.menuItem = document.getElementById('myTopnav');
    this.menuIcon = document.getElementById('menu-toggle');
    if (this.menuItem.className === 'topnav') {
      this.menuItem.className += ' responsive';
      this.menuIcon.className += ' is-active';
    } else {
      this.menuItem.className = 'topnav';
      this.menuIcon.className = 'menu-toggle';
    }
  }
}
