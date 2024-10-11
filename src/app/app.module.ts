import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './testers/auth/auth.component';
import { MapComponent } from './components/map/map.component';
import { EventcardComponent } from './components/eventcard/eventcard.component';
import { TourcardComponent } from './components/tourcard/tourcard.component';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MapComponent,
    EventcardComponent,
    TourcardComponent,
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
