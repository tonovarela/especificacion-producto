import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';


import { FormInputComponent,TituloSeccionComponent,FileUploadComponent, MenuSolicitudComponent } from './components/shared';
import { Seccion1Component, Seccion2Component, Seccion3Component, Seccion4Component, Seccion5Component, Seccion6Component, Seccion7Component, Seccion8Component, Seccion9Component, Seccion10Component, Seccion11Component, Seccion12Component, Seccion13Component, Seccion14Component, Seccion15Component } from './components/secciones';
import { FormSwitchComponent } from './components/shared/form-switch/form-switch.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TituloSeccionComponent,
    FormInputComponent,
    FileUploadComponent,
    MenuSolicitudComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    Seccion5Component,
    Seccion6Component,
    Seccion7Component,
    Seccion8Component,
    Seccion9Component,
    Seccion10Component,
    Seccion11Component,
    Seccion12Component,
    Seccion13Component,
    Seccion14Component,
    Seccion15Component,
    FormSwitchComponent
    
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
