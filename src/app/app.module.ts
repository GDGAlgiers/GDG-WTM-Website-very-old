import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingS1Component } from './landingPage/landing-s1/landing-s1.component';
import { LandingS2Component } from './landingPage/landing-s2/landing-s2.component';
import { LandingS3Component } from './landingPage/landing-s3/landing-s3.component';
import { LandingS4Component } from './landingPage/landing-s4/landing-s4.component';
import { LandingS5Component } from './landingPage/landing-s5/landing-s5.component';
import { LandingS6Component } from './landingPage/landing-s6/landing-s6.component';
import { LandingS7Component } from './landingPage/landing-s7/landing-s7.component';
import { MainLandingComponent } from './landingPage/main-landing/main-landing.component';
import { FooterComponent } from './footer/footer.component';

import { AgmCoreModule } from '@agm/core';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'

import { NotfoundComponent } from './notfound/notfound.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { RedFooterComponent } from './red-footer/red-footer.component';
import { DevfestComponent } from './devfest/devfest.component';
import { GalleryComponent } from './gallery/gallery.component';
import { environment } from 'src/environments/environment';


const config = {
  apiKey: "AIzaSyCva3CnSLIF_CvE2ZV0V8858xyvbhrKsbI",
  authDomain: "travelmantics-8c80c.firebaseapp.com",
  databaseURL: "https://travelmantics-8c80c.firebaseio.com",
  projectId: "travelmantics-8c80c",
  storageBucket: "travelmantics-8c80c.appspot.com",
  messagingSenderId: "922549820148",
  appId: "1:922549820148:web:1b0d208174d7d2d6"
};
@NgModule({
  declarations: [
    AppComponent,
    LandingS1Component,
    LandingS2Component,
    LandingS3Component,
    LandingS4Component,
    LandingS5Component,
    LandingS6Component,
    LandingS7Component,
    MainLandingComponent,
    FooterComponent,
    NotfoundComponent,
    EventsPageComponent,
    RedFooterComponent,
    DevfestComponent,
    GalleryComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), // firestore
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    NgxHmCarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCSL3loqg7Q7tRLNiZ4xd230pF7KSIFQv0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
