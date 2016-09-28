import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HORIZON_CONFIG } from './app.config';

const Horizon = require('@horizon/client');

@Injectable()
export class HorizonService {
  private _horizon: any;

  constructor() { }

  public connect(): Observable<any> {     
    this._horizon = Horizon(HORIZON_CONFIG);

    return Observable.create(observer => {
      this._horizon.onReady(status => observer.next(status));

      this._horizon.connect();
    });
  }

}
