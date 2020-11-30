import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentColorPageRoutingModule } from './currentcolor-routing.module';

import { CurrentColorPage } from './currentcolor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentColorPageRoutingModule
  ],
  declarations: [CurrentColorPage]
})
export class CurrentColorPageModule {}
