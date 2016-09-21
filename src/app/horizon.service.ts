import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const Horizon = require('@horizon/client');

@Injectable()
export class HorizonService {

  private _horizon: any;
  private _status: {} | Boolean = false;

  constructor() { }

  public connect(): Observable<any> {     
    this._horizon = Horizon({ host: '127.0.0.1:8181'});

    return Observable.create(observer => {
      this._horizon.onReady(status => {
        this._status = status;
        observer.next(status);
      });

      this._horizon.connect();
    });
  }

}