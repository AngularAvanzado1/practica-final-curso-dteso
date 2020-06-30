import { createFeatureSelector } from '@ngrx/store';
import * as fromGeographicsContinents from './geographics-continents.reducer';

export const selectGeographicsContinentsState = createFeatureSelector<fromGeographicsContinents.ContinentsState>(
  fromGeographicsContinents.geographicsContinentsFeatureKey
);
