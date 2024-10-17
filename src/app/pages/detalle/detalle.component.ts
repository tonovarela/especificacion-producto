import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '@app/model/area.interface';

import { SolicitudService } from '@app/services/solicitud.service';
import { UsuarioService } from '@app/services/usuario.service';
import { FormFactoryService } from '@services/modelForm.service';
import { delay, firstValueFrom } from 'rxjs';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent  implements OnInit {
  formService = inject(FormFactoryService);  
  solicitudService = inject(SolicitudService);
  activatedRouter = inject(ActivatedRoute);
  usuarioService = inject(UsuarioService); 
  router = inject(Router);
  formGeneral!: FormGroup;
  filesUploaded: string[] = [];
  catalogoAreas= signal<Area[]>([]);
  areasSeleccionadas= signal<Area[]>([]);


  usuario= this.usuarioService.StatusSesion().usuario!;
  guardando = signal<boolean>(false);
  
  ngOnInit(): void {
    
    this.activatedRouter.params.subscribe(({id}) => {    
    //Obtener detalle de la solicitud
    });
    const { formGeneral } = this.formService;
    this.formGeneral = formGeneral;
    this.catalogoAreas.set([
      {descripcion: 'Customer', id: 'customer'},
      {descripcion: 'Preprensa  ', id: 'prePrensa'},
      {descripcion: 'Diseño estructural', id: 'disenioEstructural'},
      {descripcion: 'Cotizaciones ', id: 'cotizacion'},
      {descripcion: 'Planeacion', id: 'planeacion'}
  ]);  
  const areas = this.catalogoAreas().map(area=>{
    return {...area,puedeEditar:this.usuario.areasPermitidas.includes(area.id)};    
  });  
  this.catalogoAreas.set(areas);
  
  this.areasSeleccionadas.set(this.catalogoAreas().filter(area => this.usuario.areasPermitidas.includes(area.id)));    
  //this.areasSeleccionadas.set(this.catalogoAreas());    
  this.formGeneral.disable();
  this.usuario.areasPermitidas.forEach(area => this.formGeneral.get(area)?.enable());

  
  }

   
  isAreaVisible(name:string): boolean {
    return this.areasSeleccionadas().some(area => area.id === name);
  }

  onRegresar() {
    this.router.navigate(['/home']);
  }
  
  async onGuardar() {      
    const propsSave =  {id_solicitud: "be0425c8-4dc6-4d59-a3c7-9b3c8b07fd8a",...this.formGeneral.value};
    const id_usuario = this.usuario.id;
    this.guardando.set(true);
    try {
      await firstValueFrom(this.solicitudService.guardar(id_usuario,propsSave).pipe(delay(1500)));
     }
    catch (exception:any) {
      //console.error(exception["error"]); 
      console.log("Manda info con algun toast")
    }
    finally{
      this.guardando.set(false);
    }
    
  }

}
