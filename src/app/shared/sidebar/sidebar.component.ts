import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
import { Sidebar } from './sidebar.model';
import { NbSidebarService } from '@nebular/theme';
import { SIDEBAR_MENU_ITEMS } from './sidebar.model';
import { LayoutService } from '../../@core/utils';


@Component({
  selector: 'ngx-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})


export class SidebarComponent implements OnInit {
  isActive: boolean;
  collapsed: boolean;
  showMenu: string[] = [];
  pushRightClass: string;
  isshownfilter: boolean = true;
  name: string;
  sidebar: Sidebar[] =[];
  orgSidebar: Sidebar[] = [];

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private sidebarService: NbSidebarService,
      private layoutService: LayoutService, public router: Router) {
      // this.parentsidebar = JSON.parse(JSON.stringify(this.sidebar))
      this.isActive = true;
      this.collapsed = false;
      this.router.events.subscribe((val) => {
          if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
      this.isActive = true;
      this.collapsed = false;
      this.showMenu = [];
      this.pushRightClass = 'push-right';
      this.sidebar = SIDEBAR_MENU_ITEMS;
      this.orgSidebar = JSON.parse(JSON.stringify(this.sidebar));
  }

  eventCalled() {
      this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
      // if (element === this.showMenu) { //this.showMenu.indexOf(element) > -1 delete element from showMenu
      //     this.showMenu = '0';
      // } else {
      //     this.showMenu = element; // this.showMenu.push(element)
      // }
      if (this.showMenu.indexOf(element) > -1) {
          this.showMenu.splice(this.showMenu.indexOf(element), 1);
      } else {
          this.showMenu.push(element);
      }
  }
  togglefilter() {
      this.isshownfilter = ! this.isshownfilter;
    }

  toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.collapsedEvent.emit(this.collapsed);
    //   console.log('toggleCollapsed');

      this.sidebarService.toggle(true, 'menu-sidebar');
      this.layoutService.changeLayoutSize();
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  // changeLang(language: string) {
  //     this.translate.use(language);
  // }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }
  onSearch(event) {
    //   console.log(this.name, this.sidebar, event.srcElement.value);
      this.name = event.srcElement.value;
      if (this.name !== '') {
          const newsidebar = [];
          this.orgSidebar.forEach(res => {
              // if (res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())) {
                  const sidebarElem = {
                      name: res.name,
                      link: res.link,
                      icon: res.icon,
                      pages: res.pages,
                      children: [],
                  };
                  res.children.forEach(elem => {
                      if (elem.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())) {
                          sidebarElem.children.push(elem);
                      }
                  });
                  newsidebar.push(sidebarElem);

                  if (sidebarElem.children.length > 0 && this.showMenu.indexOf(sidebarElem.pages) < 0) {
                      this.showMenu.push(sidebarElem.pages);
                  }
                  this.sidebar = newsidebar;
              // }
          });
          this.sidebar = newsidebar;
      } else if (this.name === '') {
          this.sidebar = JSON.parse(JSON.stringify(this.orgSidebar));       }


  }
}
