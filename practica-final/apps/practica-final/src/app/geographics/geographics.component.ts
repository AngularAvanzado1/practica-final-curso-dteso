import { Component, OnInit } from '@angular/core';

import * as GeographicsContinentsActions from './store/geographics-continents/geographics-continents.actions';
import { geographicsContinentsFeatureKey, ContinentsState } from './store/geographics-continents/geographics-continents.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'practica-final-geographics',
  templateUrl: './geographics.component.html',
  styleUrls: ['./geographics.component.css']
})
export class GeographicsComponent implements OnInit {

  public continents$ = this.store.select(state => state[geographicsContinentsFeatureKey].continents);

  constructor(private store: Store<ContinentsState>) { }

  ngOnInit(): void {
    this.store.dispatch(GeographicsContinentsActions.loadGeographicsContinents());
  }

}
