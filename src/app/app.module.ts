import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderPatparvmComponent } from './header-patparvm/header-patparvm.component';
import { PatparvmAboutComponent } from './patparvm-about/patparvm-about.component';
import { PatparvmCountryComponent } from './patparvm-country/patparvm-country.component';
import { PatparvmPicsComponent } from './patparvm-pics/patparvm-pics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPatparvmComponent,
    PatparvmAboutComponent,
    PatparvmCountryComponent,
    PatparvmPicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
