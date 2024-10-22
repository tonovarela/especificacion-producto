import { Component, inject, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractBaseGridComponent } from "@app/abstract/abstract.baseGrid.component";

import { UsuarioService } from "@app/services/usuario.service";
import { environment } from "@env/environment.development";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent  extends AbstractBaseGridComponent  implements OnInit{
   readonly URL = environment.apiUrl
  solicitudes = signal<any[]>([
    {id_solicitud: "be0425c8-4dc6-4d59-a3c7-9b3c8b07fd8a", nombre: 'Nombre del trabajo 1', fecha: '2021-10-10', area: 'Customer', estado: 'En proceso'},
    {id_solicitud: "89d57f9e-fdfe-4c27-9131-9b65c679b1d3", nombre: 'Nombre del trabajo 2', fecha: '2021-10-10', area: 'Customer', estado: 'En proceso'},
    {id_solicitud: "be0425c8-4dc6-4d59-a3c7-9b3c8b07fd8a", nombre: 'Nombre del trabajo 1', fecha: '2021-10-10', area: 'Customer', estado: 'En proceso'},
    {id_solicitud: "89d57f9e-fdfe-4c27-9131-9b65c679b1d3", nombre: 'Nombre del trabajo 2', fecha: '2021-10-10', area: 'Customer', estado: 'En proceso'},

  ]);
  router= inject(Router);
  usuarioService= inject(UsuarioService);
  ngOnInit(): void {
    this.autoFitColumns = false;        
    console.log(this.usuarioService.StatusSesion().usuario?.areasPermitidas);
  }

  irDetalle(id_solicitud: string) {    
    this.router.navigate(['/detalle', id_solicitud]);
  }

  puedeConfirmarArea(nombre:string){
    if (!this.usuarioService.StatusSesion().usuario?.areasPermitidas) {
      return false;
    }
    return this.usuarioService.StatusSesion().usuario?.areasPermitidas.includes(nombre);
  }

  cambiar(event: Event,modulo:string,id:string): void {
    const checkbox = event.target as HTMLInputElement;
    console.log({modulo,id,checked:checkbox.checked});    
    // Lógica adicional para manejar el cambio del checkbox
  
  }

  verImpresion(solicitud:any){
    console.log(solicitud.id_solicitud);    
    window.open(`${this.URL}/impresion/${solicitud.id_solicitud}`,'_blank');

  }

 
}
