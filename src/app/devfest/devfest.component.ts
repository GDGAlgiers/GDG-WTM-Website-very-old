import { Component, OnInit,AfterViewInit } from '@angular/core';
import  SimpleBar from 'simplebar'
@Component({
  selector: 'app-devfest',
  templateUrl: './devfest.component.html',
  styleUrls: ['./devfest.component.css']
})
export class DevfestComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    new SimpleBar(document.querySelector('.simpleBar'), { autoHide: true });
  }
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
