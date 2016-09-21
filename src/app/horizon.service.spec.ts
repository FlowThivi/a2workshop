/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HorizonService } from './horizon.service';

describe('Service: Horizon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HorizonService]
    });
  });

  it('should ...', inject([HorizonService], (service: HorizonService) => {
    expect(service).toBeTruthy();
  }));
});
