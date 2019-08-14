import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLandingComponent } from './landingPage/main-landing/main-landing.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { DevfestComponent } from './devfest/devfest.component';

const routes: Routes = [

  { path: '', component: DevfestComponent },
  { path: '*', component: DevfestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
