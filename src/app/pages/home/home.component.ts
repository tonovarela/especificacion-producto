import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Area } from '@app/model/area.interface';
import { FormFactoryService } from '@services/modelForm.service';

interface Usuario {
  id:string;
  nombre:string;
  usermane:string;
  areasPermitidas: string[];  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})




export class HomeComponent implements OnInit {
  formService = inject(FormFactoryService);
  formGeneral!: FormGroup;
  filesUploaded: string[] = [];
  catalogoAreas= signal<Area[]>([])
  areasSeleccionadas= signal<Area[]>([])
  usuario= signal<Usuario>({ id: '1', nombre: 'Juan', usermane: 'juanito', areasPermitidas: ["prePrensa"] });
  
  ngOnInit(): void {
    const { formGeneral } = this.formService;
    this.formGeneral = formGeneral;
    this.catalogoAreas.set([
      {descripcion: 'Customer', id: 'customer'},
      {descripcion: 'Preprensa', id: 'prePrensa'},
      {descripcion: 'Diseño estructural', id: 'disenioEstructural'},
      {descripcion: 'Cotizaciones ', id: 'cotizacion'},
      {descripcion: 'Planeacion', id: 'planeacion'}
  ]);

  
  this.areasSeleccionadas.set(this.catalogoAreas().filter(area => this.usuario().areasPermitidas.includes(area.id)));  
  this.formGeneral.disable();
  this.usuario().areasPermitidas.forEach(area => this.formGeneral.get(area)?.enable());

  
  }

   
  isAreaVisible(name:string): boolean {
    return this.areasSeleccionadas().some(area => area.id === name);
  }
  
  
  onGuardar() {  
    console.log(this.formGeneral.value);
  }

 
}
