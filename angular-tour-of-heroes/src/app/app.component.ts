import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h2>hello world</h2>'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour Of Heroes';

  getTitle() {
    return this.title;
  }
}
