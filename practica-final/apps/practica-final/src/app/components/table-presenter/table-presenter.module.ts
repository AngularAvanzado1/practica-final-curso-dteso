import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePresenterComponent } from './table-presenter.component';



@NgModule({
  declarations: [TablePresenterComponent],
  imports: [
    CommonModule
  ],
  exports: [TablePresenterComponent]
})
export class TablePresenterModule { }
