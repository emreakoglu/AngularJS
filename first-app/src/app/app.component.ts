import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rent A Car';

  name = 'Emre';

  availableCar= 10;

  isBoolean= true;

  welcomeMessage: 'Welcome to "Istanbul"';

  guest = {
    firstName: 'Emre',
    surname: 'Akoglu'
  };

  getTitle() {
    return this.title;
  }

  retACar() {
    this.availableCar--;
  }

  setAvailableCar(availableCarCount) {
    this.availableCar = availableCarCount;
  }

  getAvailableCar() {
    console.log('Arac sayisi azaldi');
    return this.availableCar;
  }

  allCarRented() {
    return this.availableCar < 1;
  }

  show(event) {
    console.log('$event:',event);
  }
}
