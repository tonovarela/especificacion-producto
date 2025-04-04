import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
      

import { NgOptimizedImage } from '@angular/common'

    
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { FormInputComponent,TituloSeccionComponent,FileUploadComponent, MenuSolicitudComponent,TimeLineComponent } from './components/shared';
import { Seccion1Component, Seccion2Component, Seccion3Component, Seccion4Component, Seccion5Component, Seccion6Component, Seccion7Component, Seccion8Component, Seccion9Component, Seccion10Component, Seccion11Component, Seccion12Component, Seccion13Component, Seccion14Component, Seccion15Component, Seccion14_1Component,Seccion4_1Component } from './components/secciones';
import { FormSwitchComponent } from './components/shared/form-switch/form-switch.component';
import { PrimeModule } from './lib/prime.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { SynfusionModule } from './lib/synfusion.module';
import { SkeletonComponent } from './components/shared/skeleton/skeleton.component';
import { MessageService } from 'primeng/api';
import { Seccion5_1Component } from './components/secciones/seccion5_1/seccion5_1.component';







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
    Seccion4_1Component,
    Seccion5Component,
    Seccion5_1Component,
    Seccion6Component,
    Seccion7Component,
    Seccion8Component,
    Seccion9Component,
    Seccion10Component,
    Seccion11Component,
    Seccion12Component,
    Seccion13Component,
    Seccion14Component,
    Seccion14_1Component,
    Seccion15Component,
    FormSwitchComponent,
    MainLayoutComponent,
    DetalleComponent,
    SkeletonComponent,
    TimeLineComponent    
  ],
  imports: [
    BrowserModule,    
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    FormsModule,
    SynfusionModule,
    PrimeModule,
    NgOptimizedImage
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
