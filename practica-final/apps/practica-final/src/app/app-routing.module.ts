import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../app/pages/continent/continent.module').then(m => m.ContinentModule),
  },
  {
    path: 'region/:code',
    loadChildren: () => import('../app/pages/region/region.module').then(m => m.RegionModule),
  },
  {
    path: 'country/:id',
    loadChildren: () => import('../app/pages/country/country.module').then(m => m.CountryModule),
  },
  { path: 'geographics', loadChildren: () => import('./geographics/geographics.module').then(m => m.GeographicsModule) },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

