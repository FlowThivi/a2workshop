import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HORIZON_CONFIG } from './app.config';

// get horizon client service
const Horizon = require('@horizon/client');

@Injectable()
export class HorizonService {
  // declare private horizon var
  private _horizon: any;

  constructor() {
    // connect to the horizon service
    this._horizon = Horizon(HORIZON_CONFIG);
  }

  // getter for the horizon service
  public get horizon() {
    return this._horizon;
  }

}
