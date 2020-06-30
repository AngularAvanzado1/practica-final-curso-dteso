import { Action, createReducer, on } from '@ngrx/store';
import * as GeographicsContinentsActions from './geographics-continents.actions';

export const geographicsContinentsFeatureKey = 'geographicContinents';

export interface ContinentsState {
  continents: any;
}

export const initialState: ContinentsState = {
  continents: {}
};

export const geographicsReducer = createReducer(
  initialState,

  on(GeographicsContinentsActions.loadGeographicsContinents, state => state),
  on(GeographicsContinentsActions.loadGeographicsContinentsSuccess, (state, payload) => ({
    ...state,
    continents: payload.data
  })),
  on(GeographicsContinentsActions.loadGeographicsContinentsFailure, (state, payload) => ({
    ...state,
    continents: payload
  }))
);

export function reducer(state: ContinentsState | undefined, action: Action) {
  return geographicsReducer(state, action);
}
