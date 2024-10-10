import { Component, inject, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControlDirective, FormControlName, FormGroup, NgControl, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent implements OnInit  {
  form: FormGroup | null = null;
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      pliego_impreso: ['vvv', Validators.required],
      altura: ['', Validators.required],
      tamano_extendido: ['', Validators.required],
      tamano_final: ['', Validators.required]
    });
  }
}
