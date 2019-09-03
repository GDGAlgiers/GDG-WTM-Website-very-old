import { Component, OnInit, AfterViewInit, NgModule } from '@angular/core';
import SimpleBar from 'simplebar'
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { Item } from './Item';
import { Observable } from 'rxjs';
import { FirebaseDatabase } from 'angularfire2';
@Component({
  selector: 'app-devfest',
  templateUrl: './devfest.component.html',
  styleUrls: ['./devfest.component.css']
})
export class DevfestComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    new SimpleBar(document.querySelector('.simpleBar'), { autoHide: true });
  }
  // private itemsCollection: AngularFirestoreCollection<Item>;
  // items: Observable<Item[]>;

  lat: number = 36.705074;
  lng: number = 3.173912;
  zoom: number = 16;
  _db:AngularFireDatabase
  emails:Observable<any[]>;
  itemRef: AngularFireList<any>;
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.list('emails');
    this._db=db
    this.emails = this.itemRef.valueChanges();
    console.log(this.itemRef)
  }
  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  buttonClick(event: any) { 
    var email = ((document.getElementById("inputEmail") as HTMLInputElement).value);
    console.log(email)
    const id = this._db.createPushId()
    const item: Item = { id, email };
    console.log(item)
    this.itemRef.push(item).catch(err=>console.log(err))
  }
}

