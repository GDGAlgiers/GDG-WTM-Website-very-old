import { Component, OnInit, AfterViewInit, NgModule } from '@angular/core';
import SimpleBar from 'simplebar'
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-devfest',
  templateUrl: './devfest.component.html',
  styleUrls: ['./devfest.component.css']
})
export class DevfestComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    new SimpleBar(document.querySelector('.simpleBar'), { autoHide: true });
  }
  lat: number = 36.705074;
  lng: number = 3.173912;
  zoom: number = 16;
  ngOnInit() {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
