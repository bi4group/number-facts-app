import {TestBed} from '@angular/core/testing';

import {MagicNumberService} from './magic-number.service';
import {MockMagicNumberService} from "../mocks/mock.services";
import {MagicNumberResponse} from "../interfaces/magic-number-response";

describe('MagicNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: MagicNumberService, useValue: new MockMagicNumberService()}
    ]
  }));

  it('should be created', () => {
    const service: MagicNumberService = TestBed.get(MockMagicNumberService);
    expect(service).toBeTruthy();
  });

  it('should return a valid result', async () => {
    const service: MockMagicNumberService = TestBed.get(MockMagicNumberService);
    const result: MagicNumberResponse = await service.getRandomFact(10).toPromise();

    expect(result.number).toEqual(10);
  });
});
