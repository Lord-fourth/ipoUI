import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ipoFrontEnd';
  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }
}
