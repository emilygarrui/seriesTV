import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-series',
    loadChildren: () => import('./my-series/my-series.module').then( m => m.MySeriesPageModule)
  },
  {
    path: 'serie-form',
    loadChildren: () => import('./serie-form/serie-form.module').then( m => m.SerieFormPageModule)
  },
  {
  path: 'serie-form/:id',
  loadChildren: () => import('./serie-form/serie-form.module').then(m => m.SerieFormPageModule)
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
