import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {MagicNumberResponse} from '../interfaces/magic-number-response';
import {MagicNumberService} from "../services/magic-number.service";
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MockMagicNumberService extends MagicNumberService {
  constructor() {
    super(null);
  }

  getRandomFact(magicNumber: number): Observable<MagicNumberResponse> {
    return of({
      text: '',
      number: magicNumber,
      found: false,
      type: ''
    })
  }
}
