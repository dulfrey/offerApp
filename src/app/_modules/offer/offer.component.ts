import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
 @Input() id_offer:string;
 @Input() name_offer:string;
 @Input() offer={id:"alskdfj",versions:[{name:"",id:""}]};

  constructor() { }

  ngOnInit(): void {
    console.log(this.offer)
  }

}
