import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gdgWebsite';
  showFooter = true;
  constructor(private location: Location, private router: Router) {
    router.events.subscribe((val: Event) => {
      this.showFooter = location.path() === '';

    });

  }
}
