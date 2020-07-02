import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentRoutingModule } from './continent-routing.module';
import { ContinentComponent } from './continent.component';
import { TablePresenterModule } from '../../components/table-presenter/table-presenter.module';



@NgModule({
  declarations: [ContinentComponent],
  imports: [
    CommonModule,
    ContinentRoutingModule,
    TablePresenterModule
  ]
})
export class ContinentModule { }
