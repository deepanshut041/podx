import { Component, OnInit } from '@angular/core';
import { HOME_MENU_ITEMS } from '../shared/constants/home-menu';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menu = HOME_MENU_ITEMS

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {

  }

  toggle() {
    this.sidebarService.toggle();
  }

}
