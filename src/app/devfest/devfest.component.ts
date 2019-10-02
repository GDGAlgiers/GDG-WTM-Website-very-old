import { Component, OnInit, AfterViewInit } from '@angular/core';
import SimpleBar from 'simplebar';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Item } from './Item';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-devfest',
  templateUrl: './devfest.component.html',
  styleUrls: ['./devfest.component.css']
})
export class DevfestComponent implements OnInit, AfterViewInit {
  newEmail: string = ''
  ngAfterViewInit(): void {
    new SimpleBar(document.querySelector('.simpleBar'), { autoHide: true });
  }
  // private itemsCollection: AngularFirestoreCollection<Item>;
  // items: Observable<Item[]>;s

  lat: number = 36.705074;
  lng: number = 3.173912;
  zoom: number = 16;
  _db: AngularFireDatabase;
  emails: Observable<any[]>;
  itemRef: AngularFireList<any>;


  constructor(db: AngularFireDatabase, private toast: ToastrService) {
    console.log(this.newEmail)
    this.itemRef = db.list('emails');
    this._db = db;
    this.emails = this.itemRef.valueChanges();
    console.log(this.itemRef);
  }
  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
  submitEmail() {
    let email=this.newEmail
    let okay = this.validateEmail(email)
    if (okay) {
      this.toast.success("Your email is saved !","Email")
      const id = this._db.createPushId();
      const item: Item = { id, email };
      console.log(item);
      this.itemRef.push(item).catch(err => console.log(err));
      this.newEmail=""
    } else {
      this.toast.error("This email isn\'t correct","Email")
    }
  }

  validateEmail(email): boolean {
    // tslint:disable-next-line: max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

