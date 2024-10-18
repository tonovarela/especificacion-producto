import { Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '@app/model/area.interface';

import { SolicitudService } from '@app/services/solicitud.service';
import { UsuarioService } from '@app/services/usuario.service';
import { FormFactoryService } from '@services/modelForm.service';
import {  firstValueFrom } from 'rxjs';
import { Solicitud } from '../../model/solicitud.response';
import { environment } from '@env/environment.development';



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  readonly URL_API = environment.apiUrl;
  formService = inject(FormFactoryService);
  solicitudService = inject(SolicitudService);
  activatedRouter = inject(ActivatedRoute);
  usuarioService = inject(UsuarioService);
  router = inject(Router);
  formGeneral!: FormGroup;
  filesUploaded: string[] = [];
  catalogoAreas = signal<Area[]>([]);
  areasSeleccionadas = signal<Area[]>([]);


  usuario = this.usuarioService.StatusSesion().usuario!;
  guardando = signal<boolean>(false);
  cargandoDatos = signal<boolean>(false);
  cargandoImagenes = signal<boolean>(false);
   solicitud!:Solicitud;


  ngOnInit(): void {
    const { formGeneral } = this.formService;
    this.formGeneral = formGeneral;
    this.formGeneral.reset();
    this.activatedRouter.params.subscribe(async ({ id }) => {
      try {
        this.cargandoDatos.set(true);
        const {solicitud,...rest} = await firstValueFrom(this.solicitudService.obtener(id,false));                      
        this.solicitud=solicitud;
        this.formGeneral.patchValue({ ...rest});
      
      } catch (error) {
        this.router.navigate(['/home']);
      }
      this.cargandoDatos.set(false);
      //this.cargandoImagenes.set(true);
      //const {solicitud,...rest} = await firstValueFrom(this.solicitudService.obtener(id,true));            
      //this.formGeneral.patchValue({ prePrensa:{...this.obtenerArregloImagenes(rest.prePrensa)}});                
      //this.formGeneral.patchValue({ customer:{...this.obtenerArregloImagenes(rest.customer)}});                
      //this.cargandoImagenes.set(false);

    });
    




    this.catalogoAreas.set([
      { descripcion: 'Customer', id: 'customer' },
      { descripcion: 'Preprensa  ', id: 'prePrensa' },
      { descripcion: 'Diseño estructural', id: 'disenioEstructural' },
      { descripcion: 'Cotizaciones ', id: 'cotizacion' },
      { descripcion: 'Planeacion', id: 'planeacion' }
    ]);
    const areas = this.catalogoAreas().map(area => {
      return { ...area, puedeEditar: this.usuario.areasPermitidas.includes(area.id) };
    });
    this.catalogoAreas.set(areas);

    this.areasSeleccionadas.set(this.catalogoAreas().filter(area => this.usuario.areasPermitidas.includes(area.id)));
    //this.areasSeleccionadas.set(this.catalogoAreas());    
    this.formGeneral.disable();
    this.usuario.areasPermitidas.forEach(area => this.formGeneral.get(area)?.enable());


  }


  isAreaVisible(name: string): boolean {
    return this.areasSeleccionadas().some(area => area.id === name);
  }

  onRegresar() {
    this.router.navigate(['/home']);
  }

  async onGuardar() {
    
    const {id_solicitud} = this.solicitud
    const propsSave = { id_solicitud, ...this.formGeneral.value };
    const id_usuario = this.usuario.id;
    this.guardando.set(true);
    try {
      await firstValueFrom(this.solicitudService.guardar(id_usuario, propsSave));
    }
    catch (exception: any) {
      //console.error(exception["error"]); 
      console.log("Manda info con algun toast")
    }
    finally {
      this.guardando.set(false);
    }

  }



  private obtenerArregloImagenes(object: any) {    
    const data: { [key: string]: any } = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        if (object[key] instanceof Array){
          const arreglo = object[key].map((item: any) => {
            return { ...item, documento: `${this.URL_API}/documento/${item.id_documento}` };
          });
          data[key] = arreglo;          
        }                      
      }      
    }        
    return data;
  }

}
