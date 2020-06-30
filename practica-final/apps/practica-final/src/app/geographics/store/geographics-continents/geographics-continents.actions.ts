import { createAction, props } from '@ngrx/store';

export const loadGeographicsContinents = createAction(
  '[GeographicsContinents] Load GeographicsContinents'
);

export const loadGeographicsContinentsSuccess = createAction(
  '[GeographicsContinents] Load GeographicsContinents Success',
  props<{ data: any }>()
);

export const loadGeographicsContinentsFailure = createAction(
  '[GeographicsContinents] Load GeographicsContinents Failure',
  props<{ error: any }>()
);
