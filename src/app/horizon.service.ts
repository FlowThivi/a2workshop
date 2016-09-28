import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HORIZON_CONFIG } from './app.config';

const Horizon = require('@horizon/client');

@Injectable()
export class HorizonService {
  private _horizon: any;

  constructor() {
    this._horizon = Horizon(HORIZON_CONFIG);
    this._horizon.connect();
  }

}
