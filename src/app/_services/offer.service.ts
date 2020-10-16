import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private offersData: BehaviorSubject<any> = new BehaviorSubject([]);
  public offersData$ = this.offersData.asObservable();
  getOffers(){
    this.http.get('../../assets/offers.json').subscribe(data => {
      this.offersData.next(data);
      return data;
    });
  }
  constructor(private http: HttpClient) {
    
   }
}
