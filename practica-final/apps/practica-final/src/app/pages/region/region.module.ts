import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './region.component';
import { RegionRoutingModule } from './region-routing.module';
import { TablePresenterModule } from '../../components/table-presenter/table-presenter.module';


@NgModule({
  declarations: [RegionComponent],
  imports: [
    RegionRoutingModule,
    CommonModule,
    TablePresenterModule
  ]
})
export class RegionModule { }
