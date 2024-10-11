import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TituloSeccionComponent } from './components/titulo-seccion/titulo-seccion.component';
import { FormInputComponent } from './components/shared/form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Seccion1Component } from './components/seccion1/seccion1.component';
import { Seccion2Component } from './components/seccion2/seccion2.component';
import { Seccion3Component } from './components/seccion3/seccion3.component';
import { Seccion4Component } from './components/seccion4/seccion4.component';
import { FileUploadComponent } from './components/shared/file-upload/file-upload.component';
import { MenuSolicitudComponent } from './components/menu-solicitud/menu-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TituloSeccionComponent,
    FormInputComponent,
    Seccion1Component,
    Seccion2Component,
    Seccion3Component,
    Seccion4Component,
    FileUploadComponent,
    MenuSolicitudComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
