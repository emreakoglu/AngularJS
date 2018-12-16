import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rentacar',
  templateUrl: './rentacar.component.html',
  styleUrls: ['./rentacar.component.css']
})
export class RentacarComponent implements OnInit {

  guest = {
    name: 'Emre Akoglu',
    age : 23,
    isVip: false
  }

  styles = {
    'font-style': this.guest.isVip ? 'italic' : 'normal',
    'font-weight': this.guest.isVip ? 'bold' : 'normal',
    'font-size': this.guest.isVip ? '24px' : '12px'
  }

  welcomeMessage = 'Welcome Our Rent A Car System';

  constructor() { }

  ngOnInit() {
  }

}
