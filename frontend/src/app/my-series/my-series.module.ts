import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MySeriesPageRoutingModule } from './my-series-routing.module';

import { MySeriesPage } from './my-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MySeriesPageRoutingModule
  ],
  declarations: [MySeriesPage]
})
export class MySeriesPageModule {}
