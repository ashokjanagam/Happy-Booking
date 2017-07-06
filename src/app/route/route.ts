import {LayoutComponent} from "../layout/layout.component";
import {OSpecialComponent} from "./o-special/o-special.component";
import {OrderComponent} from "./order/order.component";
import {HomeComponent} from "./home/home.component";

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'oSpecial', component: OSpecialComponent },
            { path: 'order', component: OrderComponent },
            { path: 'home', component: HomeComponent }
        ]
    },

    { path: '**', redirectTo: 'home' }

];