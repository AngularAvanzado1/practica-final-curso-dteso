import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: RegionComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
