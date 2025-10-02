import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SerieFormPage } from './serie-form.page';

const routes: Routes = [
  {
    path: '',
    component: SerieFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SerieFormPageRoutingModule {}
