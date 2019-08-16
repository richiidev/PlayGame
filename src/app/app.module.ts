import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// Routes
//import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// firebase npm install firebase angularfire2
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddUserComponent } from './components/add-user/add-user.component';


// components

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
