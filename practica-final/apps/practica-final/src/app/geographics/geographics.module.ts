import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeographicsRoutingModule } from './geographics-routing.module';
import { GeographicsComponent } from './geographics.component';
import { StoreModule } from '@ngrx/store';
import * as fromGeographicsContinents from './store/geographics-continents/geographics-continents.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GeographicsContinentsEffects } from './store/geographics-continents/geographics-continents.effects';


@NgModule({
  declarations: [GeographicsComponent],
  imports: [
    CommonModule,
    GeographicsRoutingModule,
    StoreModule.forFeature(fromGeographicsContinents.geographicsContinentsFeatureKey, fromGeographicsContinents.reducer),
    EffectsModule.forFeature([GeographicsContinentsEffects])
  ]
})
export class GeographicsModule { }
