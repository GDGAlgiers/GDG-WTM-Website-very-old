import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLandingComponent } from './landingPage/main-landing/main-landing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { DevfestComponent } from './devfest/devfest.component';

const routes: Routes = [
  { path: 'events', component: EventsPageComponent },
  { path: 'projects', component: NotfoundComponent },
  { path: 'gdglife', component: NotfoundComponent },
  { path: 'team', component: NotfoundComponent },
  { path: 'events/devfest', component: DevfestComponent },
  { path: '', component: MainLandingComponent },
  { path: '*', component: MainLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
