import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region.component';
import { RegionRoutingModule } from './region-routing.module';


@NgModule({
  declarations: [RegionComponent],
  imports: [
    RegionRoutingModule,
    CommonModule
  ]
})
export class RegionModule { }
