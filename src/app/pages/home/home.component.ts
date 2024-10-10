import { Component, inject, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControlDirective, FormControlName, FormGroup, NgControl, NgModel, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent implements OnInit  {

  formGeneral!: FormGroup;
  cotizacionesForm!: FormGroup;

  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    
    this.cotizacionesForm = this.fb.group({
      descripcion: [''],
      pliego: ['Pliego extra'],
      single: ['single'],
      corrugado_tacon: ['Corrugado'],
      adhesivo: ['adhesivo'],
      cinta: ['Cinta'],
    })
    
    this.formGeneral = this.fb.group({
      cotizaciones: this.cotizacionesForm
    }
    )      
  }
}
