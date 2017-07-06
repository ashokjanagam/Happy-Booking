import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OSpecialComponent } from './o-special.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OSpecialComponent],
  exports:[OSpecialComponent]
})
export class OSpecialModule { }
