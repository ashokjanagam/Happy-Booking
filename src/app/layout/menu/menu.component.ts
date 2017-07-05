import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../core/menu.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems:Array<any>;

  constructor(private menu:MenuService) {
    this.menuItems = menu.getMenu();
  }

  ngOnInit() {

  }

}
