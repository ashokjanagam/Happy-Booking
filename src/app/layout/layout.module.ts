import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { OffersComponent } from './offers/offers.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, OffersComponent, RoombookingComponent],
  exports:[LayoutComponent, HeaderComponent, FooterComponent, MenuComponent, OffersComponent, RoombookingComponent,SharedModule]
})
export class LayoutModule { }
