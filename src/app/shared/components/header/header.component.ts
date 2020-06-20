import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';

@Component({
    selector: 'shared-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();
    userPictureOnly: boolean = false;
    user: any;

    themeMenu = [
        {
            value: 'default',
            title: 'Light',
        },
        {
            value: 'dark',
            title: 'Dark',
        },
        {
            value: 'cosmic',
            title: 'Cosmic',
        },
        {
            value: 'corporate',
            title: 'Corporate',
        },
    ];

    currentTheme = 'default';

    userMenu = [
        {
            title: 'Profile',
            icon: 'person-outline',
          },
          {
            title: 'Settings',
            icon: 'settings-outline',
          },
          {
            title: 'Privacy Policy',
            icon: { icon: 'checkmark-outline', pack: 'eva' },
          },
          {
            title: 'Logout',
            icon: 'unlock-outline',
          },
    ];

    constructor(private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
        private themeService: NbThemeService,
        private userService: UserService) {
    }

    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;

        this.user = this.userService.getProfile()

        this.themeService.onThemeChange()
        .pipe( map(({ name }) => name), takeUntil(this.destroy$),
        ).subscribe(themeName => this.currentTheme = themeName);
        
        this.menuService.onItemClick()
        .pipe(
            filter(({ tag }) => tag === 'theme-menu'),
            map(({ item: { title } }) => title),
        )
        .subscribe(title => {
            this.themeMenu.map(item => {
                if(item.title == title)
                    this.themeService.changeTheme(item.value);
            })
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
    }

    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
}