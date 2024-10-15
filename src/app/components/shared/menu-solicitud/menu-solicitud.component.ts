import { Component, EventEmitter, Input, OnInit, Output,model } from '@angular/core';
import { Area } from '@app/model/area.interface';


@Component({
  selector: 'app-menu-solicitud',
  templateUrl: './menu-solicitud.component.html',
  styleUrl: './menu-solicitud.component.css'
})
export class MenuSolicitudComponent implements OnInit {

@Output() onGuardar =new EventEmitter<void>();
@Input() habilitarGuardar: boolean=true;
@Input() catalogoAreas: Area[]=[];


 
areasSeleccionadas= model<Area[]>([]);



ngOnInit() { }








}
