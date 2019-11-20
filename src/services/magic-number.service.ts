import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {MagicNumberResponse} from '../interfaces/magic-number-response';

@Injectable({
  providedIn: 'root'
})
export class MagicNumberService {

  constructor(protected httpClient: HttpClient) {
  }

  getRandomFact(magicNumber: number): Observable<MagicNumberResponse> {
    return this.httpClient.get<MagicNumberResponse>(
      'https://numbersapi.p.rapidapi.com/random/trivia',
      {
        params: {
          type: 'trivia',
          min: magicNumber.toString(),
          max: magicNumber.toString(),
          json: 'true',
          fragment: 'true'
        },
        headers: {
          'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
          'X-RapidAPI-Key': 'b70293ebe5mshb14c17fd577f3ecp1b2002jsn0f35c6554b44'
        }
      });
  }
}
