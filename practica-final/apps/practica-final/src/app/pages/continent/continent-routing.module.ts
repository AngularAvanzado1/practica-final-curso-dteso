import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentComponent } from './continent.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: ContinentComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContinentRoutingModule { }
