import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentRoutingModule } from './continent-routing.module';
import { ContinentComponent } from './continent.component';



@NgModule({
  declarations: [ContinentComponent],
  imports: [
    CommonModule,
    ContinentRoutingModule
  ]
})
export class ContinentModule { }
