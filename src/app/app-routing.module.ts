import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainEventsComponent } from './eventsPage/main-events/main-events.component';
import { MainLandingComponent } from './landingPage/main-landing/main-landing.component';

const routes: Routes = [
  { path: 'events', component: MainEventsComponent },
  { path: '', component: MainLandingComponent },
  { path: '*', component: MainLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
