import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusBuzzerPage } from './statusbuzzer.page';

const routes: Routes = [
  {
    path: '',
    component: StatusBuzzerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatusBuzzerPageRoutingModule {}
