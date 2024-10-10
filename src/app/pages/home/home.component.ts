import { Component, inject, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { FormFactoryService } from '../../services/modelForm.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent implements OnInit {
  formService = inject(FormFactoryService);  
  formGeneral!: FormGroup;

  ngOnInit(): void {
    const { formGeneral } = this.formService;
    this.formGeneral = formGeneral;              
  }

   formGroupName(name:string) {    
    return this.formGeneral.get(name) as FormGroup
  }
  
  

  onGuardar() {
    //console.log(this.formGeneral.invalid);
    console.log(this.formGeneral.value);
  }
}
