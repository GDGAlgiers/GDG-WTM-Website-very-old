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
import { MainEventsComponent } from './eventsPage/main-events/main-events.component';
import { FooterComponent } from './footer/footer.component';

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
    MainEventsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHmCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
