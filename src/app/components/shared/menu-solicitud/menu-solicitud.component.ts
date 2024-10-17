import { Component, EventEmitter, Input, OnInit, Output,model } from '@angular/core';
import { Area } from '@app/model/area.interface';


@Component({
  selector: 'app-menu-solicitud',
  templateUrl: './menu-solicitud.component.html',
  styleUrl: './menu-solicitud.component.css'
})
export class MenuSolicitudComponent implements OnInit {

@Output() onGuardar =new EventEmitter<void>();
@Output() onRegresar =new EventEmitter<void>();
@Input() habilitarGuardar: boolean=true;
@Input() catalogoAreas: Area[]=[];
@Input() guardando: boolean=false;


 
areasSeleccionadas= model<Area[]>([]);



ngOnInit() { }








}
