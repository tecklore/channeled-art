import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { ContentMap } from '../contentMap';
import { ContentmanagerService } from '../contentmanager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagelayout',
  templateUrl: './pagelayout.component.html',
  styleUrls: ['./pagelayout.component.scss']
})
export class PagelayoutComponent implements OnInit {
  content: ContentMap;
  pathName = window.location.pathname.split('/');
  path = this.pathName[this.pathName.length - 1] || '';
  winWidth = this.getWindowWidth();
  isDesktop;
  mainImgUrl: string;
  mainImgDiv: HTMLElement;
  baseImgUrlMobile = 'mobileBg/';
  baseImgUrl = '/assets/images/';

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    this.onResize();
  }

  constructor(
    private contentManagerService: ContentmanagerService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setIsDesktop();
    this.getContent();
  }

  getContent(): void {
    const id: string = this.path;
    //const id: string = this.route.snapshot.paramMap.get('id');
    this.contentManagerService.getContent(id)
      .subscribe(content => this.content = content);
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

  setIsDesktop(): void {
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
}
