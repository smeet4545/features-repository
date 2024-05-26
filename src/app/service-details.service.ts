import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  searchdata = new Subject<string>();
  
  constructor() { }
}
