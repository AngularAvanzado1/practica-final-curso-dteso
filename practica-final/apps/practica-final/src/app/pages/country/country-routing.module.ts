import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: CountryComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
