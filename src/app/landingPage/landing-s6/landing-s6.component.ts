import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-s6',
  templateUrl: './landing-s6.component.html',
  styleUrls: ['./landing-s6.component.css']
})
export class LandingS6Component implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
