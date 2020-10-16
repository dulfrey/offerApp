import { Component } from '@angular/core';
import { OfferService } from './_services/offer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'offerApp';
  offers: any;
  public offerSelected={id:"alskdfj",versions:[{name:"",id:"",productOfferingPrices:[],characteristics:[]}]} ;

  constructor(public offerservice: OfferService) {
    this.offerservice.offersData$.subscribe(offers =>{
      this.offers = offers;
    })
  }

  ngOnInit() {
    this.offerservice.getOffers();
    
  }
  onChange(event){
    let index = event.target.value;
    this.offerSelected = this.offers[index];
  }
}
