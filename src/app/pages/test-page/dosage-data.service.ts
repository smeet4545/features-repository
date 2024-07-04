import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DosageDataService {
  private subject = new Subject<any>();
  dosage_details: any;
  constructor() {}

  getDosageData(params: { dosageDetails: any }) {
    this.dosage_details = params.dosageDetails;
    console.log(this.dosage_details);
    this.subject.next(params);
  }

  dosageObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
