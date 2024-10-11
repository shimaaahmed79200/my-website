import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';

import { EventsHomeComponent } from './events-home/events-home.component';
import { ToursHomeComponent } from './tours-home/tours-home.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './testers/auth/auth.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { BrandComponent } from './brand/brand.component';
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    EventsHomeComponent,
    ToursHomeComponent,
    SubscribeComponent,
    BrandComponent
=======
    AuthComponent
>>>>>>> 797ecb29837b5770a5c3a41d2b74b23d64162850
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, 
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
