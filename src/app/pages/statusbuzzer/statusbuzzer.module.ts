import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusBuzzerPageRoutingModule } from './statusbuzzer-routing.module';

import { StatusBuzzerPage } from './statusbuzzer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusBuzzerPageRoutingModule
  ],
  declarations: [StatusBuzzerPage]
})
export class StatusBuzzerPageModule {}
