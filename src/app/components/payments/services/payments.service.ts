import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import data from '../../../../assets/data/data.json';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  constructor() {}

  getPayments() {
    return of([data]).pipe(delay(1000));
  }
}
