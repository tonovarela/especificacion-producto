import { Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFactoryService } from '@services/modelForm.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent implements OnInit {
  formService = inject(FormFactoryService);
  formGeneral!: FormGroup;
  filesUploaded: string[] = [];

  ngOnInit(): void {
    const { formGeneral } = this.formService;
    this.formGeneral = formGeneral;
  
  }



  onGuardar() {  
    console.log(this.formGeneral.value);
  }

 
}
