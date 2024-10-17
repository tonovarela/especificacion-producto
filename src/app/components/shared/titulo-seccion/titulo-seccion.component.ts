import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-seccion',
  templateUrl: './titulo-seccion.component.html',  
})
export class TituloSeccionComponent {

  @Input('titulo') titulo: string=" ";
  @Input('numero') numero: string=" ";
  @Input('departamento') departamento: string=" ";
  @Input('habilitado') habilitado: boolean=true;


}
