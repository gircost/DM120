import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusBuzzerPageRoutingModule } from './statusbuzzer-routing.module';

import { StatusBuzzerPage } from './statusbuzzer.page';
import { ChartModule } from 'angular2-highcharts'; 
import * as highcharts from 'highcharts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusBuzzerPageRoutingModule,
    ChartModule.forRoot(highcharts)
  ],
  declarations: [StatusBuzzerPage]
})
export class StatusBuzzerPageModule {}
