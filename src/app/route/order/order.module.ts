import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderComponent],
  exports:[OrderComponent]
})
export class OrderModule { }
