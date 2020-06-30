import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import * as GeographicsContinentsActions from './geographics-continents.actions';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';

@Injectable()
export class GeographicsContinentsEffects {
  public miEfecto$: Observable<Action>;

  private continentsURL = 'http://api.worldbank.org/v2/region/?format=json';

  loadGeographicsContinentss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GeographicsContinentsActions.loadGeographicsContinents),
      concatMap(() =>
        this.http.get<any>(this.continentsURL).pipe(
          map(data => GeographicsContinentsActions.loadGeographicsContinentsSuccess({ data })),
          catchError(error => of(GeographicsContinentsActions.loadGeographicsContinentsFailure({ error }))))
      )
    );
  });
  constructor(private actions$: Actions, private http: HttpClient) { }

}
