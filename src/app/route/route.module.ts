import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./route";
import {OSpecialModule} from "./o-special/o-special.module";
import {OrderModule} from "./order/order.module";
import {HomeModule} from "./home/home.module";
import {menu} from "./menu";
import {MenuService} from "../core/menu.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    OSpecialModule,
    OrderModule,
    HomeModule
  ],
  declarations: [],
  exports:[RouterModule]
})
export class RouteModule {
  constructor(private menuService: MenuService) {
    menuService.addMenu(menu);
  }
}
