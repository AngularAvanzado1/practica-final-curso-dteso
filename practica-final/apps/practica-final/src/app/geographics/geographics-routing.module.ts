import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeographicsComponent } from './geographics.component';

const routes: Routes = [{ path: '', component: GeographicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeographicsRoutingModule { }
