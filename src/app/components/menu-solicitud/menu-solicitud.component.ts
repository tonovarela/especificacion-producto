import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu-solicitud',
  templateUrl: './menu-solicitud.component.html',
  styleUrl: './menu-solicitud.component.css'
})
export class MenuSolicitudComponent {

@Output() onGuardar =new EventEmitter<void>();
@Input() habilitarGuardar: boolean=true;



}
