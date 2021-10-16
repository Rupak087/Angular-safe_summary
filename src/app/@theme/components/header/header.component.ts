// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

// import { UserData } from '../../../@core/data/users';
// import { LayoutService } from '../../../@core/utils';
// import { map, takeUntil } from 'rxjs/operators';
// import { Subject } from 'rxjs';

// @Component({
//   selector: 'ngx-header',
//   styleUrls: ['./header.component.scss'],
//   templateUrl: './header.component.html',
// })
// export class HeaderComponent implements OnInit, OnDestroy {

//   private destroy$: Subject<void> = new Subject<void>();
//   userPictureOnly: boolean = false;
//   user: any;

//   themes = [
//     {
//       value: 'default',
//       name: 'Light',
//     },
//     {
//       value: 'dark',
//       name: 'Dark',
//     },
//     {
//       value: 'cosmic',
//       name: 'Cosmic',
//     },
//     {
//       value: 'corporate',
//       name: 'Corporate',
//     },
//   ];

//   currentTheme = 'default';

//   userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

//   constructor(private sidebarService: NbSidebarService,
//               private menuService: NbMenuService,
//               private themeService: NbThemeService,
//               private userService: UserData,
//               private layoutService: LayoutService,
//               private breakpointService: NbMediaBreakpointsService) {
//   }

//   ngOnInit() {
//     this.currentTheme = this.themeService.currentTheme;

//     this.userService.getUsers()
//       .pipe(takeUntil(this.destroy$))
//       .subscribe((users: any) => this.user = users.nick);

//     const { xl } = this.breakpointService.getBreakpointsMap();
//     this.themeService.onMediaQueryChange()
//       .pipe(
//         map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
//         takeUntil(this.destroy$),
//       )
//       .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

//     this.themeService.onThemeChange()
//       .pipe(
//         map(({ name }) => name),
//         takeUntil(this.destroy$),
//       )
//       .subscribe(themeName => this.currentTheme = themeName);
//   }

//   ngOnDestroy() {
//     this.destroy$.next();
//     this.destroy$.complete();
//   }

//   changeTheme(themeName: string) {
//     this.themeService.changeTheme(themeName);
//   }

//   toggleSidebar(): boolean {
//     this.sidebarService.toggle(true, 'menu-sidebar');
//     this.layoutService.changeLayoutSize();

//     return false;
//   }

//   navigateHome() {
//     this.menuService.navigateHome();
//     return false;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'ngx-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;

    constructor(public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    // isAdmin(): boolean {
    //     return this.loginService.isAdmin();
    // }

    ngOnInit() {
        this.pushRightClass = 'push-right';
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

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }


}

