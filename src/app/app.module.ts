import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';

import { EventsHomeComponent } from './components/events-home/events-home.component';
import { ToursHomeComponent } from './components/tours-home/tours-home.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';


import { EventcardComponent } from './components/eventcard/eventcard.component';
import { TourcardComponent } from './components/tourcard/tourcard.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { BrandComponent } from './components/brand/brand.component';
import { EventsComponent } from './components/events/events.component';

import { HttpClientModule } from '@angular/common/http'
import { EventDetailsComponent } from './pages/event-details/event-details.component';

import { EventspageComponent } from './pages/eventspage/eventspage.component';
import { ToursspageComponent } from './pages/toursspage/toursspage.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { ToursComponent } from './pages/tours/tours.component';


  
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    EventsHomeComponent,
    ToursHomeComponent,
    SubscribeComponent,

    EventcardComponent,
    TourcardComponent,

    BrandComponent,
    EventsComponent,

    EventDetailsComponent,

    
    EventspageComponent,
    ToursspageComponent,
    FilterBarComponent,
    ToursComponent,

    
  ],

  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    AngularFireDatabaseModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
