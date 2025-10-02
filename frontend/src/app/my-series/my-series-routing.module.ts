import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySeriesPage } from './my-series.page';

const routes: Routes = [
  {
    path: '',
    component: MySeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySeriesPageRoutingModule {}
