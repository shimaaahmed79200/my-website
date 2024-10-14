import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events/events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { ToursspageComponent } from './pages/toursspage/toursspage.component';
import { EventspageComponent } from './pages/eventspage/eventspage.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { ToursComponent } from './pages/tours/tours.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'events', component: EventsComponent},
  {path: 'tourdetails', component: EventDetailsComponent},
  {path: 'eventdetails', component: ToursComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
