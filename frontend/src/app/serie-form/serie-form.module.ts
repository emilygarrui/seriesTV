import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SerieFormPageRoutingModule } from './serie-form-routing.module';

import { SerieFormPage } from './serie-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SerieFormPageRoutingModule
  ],
  declarations: [SerieFormPage]
})
export class SerieFormPageModule {}
