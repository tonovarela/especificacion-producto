import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from '@app/model/area.interface';

import { SolicitudService } from '@app/services/solicitud.service';
import { UsuarioService } from '@app/services/usuario.service';
import { FormFactoryService } from '@services/modelForm.service';
import { firstValueFrom } from 'rxjs';
import { Solicitud } from '../../model/solicitud.response';
import { environment } from '@env/environment.development';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css',

})
export class DetalleComponent implements OnInit {
  readonly URL_API = environment.apiUrl;
  private _actualizoInformacion = signal<boolean>(false);
  private messageService = inject(MessageService);
  formService = inject(FormFactoryService);

  solicitud!: Solicitud;
  solicitudService = inject(SolicitudService);
  activatedRouter = inject(ActivatedRoute);
  usuarioService = inject(UsuarioService);
  router = inject(Router);
  formGeneral!: FormGroup;
  archivosCargados: string[] = [];
  catalogoAreas = signal<Area[]>([]);
  areasSeleccionadas = signal<Area[]>([]);


  usuario = this.usuarioService.StatusSesion().usuario!;
  guardando = signal<boolean>(false);
  cargandoDatos = signal<boolean>(false);
  actualizoInformacion = computed<boolean>(() => this._actualizoInformacion());

  ngOnInit(): void {
    const { formGeneral } = this.formService;
    this.formGeneral = formGeneral;
    this.formGeneral.reset();

    this.activatedRouter.params.subscribe(async ({ id }) => {
      try {
        this.cargandoDatos.set(true);
        const { solicitud, ...rest } = await firstValueFrom(this.solicitudService.obtener(id, false));
        this.solicitud = solicitud;



        this.formGeneral.patchValue({ ...rest });
        this.formGeneral.valueChanges.subscribe(() => this._actualizoInformacion.set(true));
        
        if (this.solicitud.id_estado=="2"){
          this.usuario.areasPermitidas.forEach(area => this.formGeneral.get(area)?.enable());
        }        
      } catch (error) {
        this.router.navigate(['/home']);
      }
      this.cargandoDatos.set(false);
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
    const areasSeleccionadas = this.catalogoAreas().filter(area => this.usuario.areasPermitidas.includes(area.id));
    this.areasSeleccionadas.set(areasSeleccionadas.length === 0 ? this.catalogoAreas() : areasSeleccionadas);
    this.formGeneral.disable();


    




  }


  isAreaVisible(name: string): boolean {
    return this.areasSeleccionadas().some(area => area.id === name);
  }

  onRegresar() {
    this.router.navigate(['/home']);
  }

  async onGuardar() {

    const { id_solicitud } = this.solicitud
    const propsSave = { id_solicitud, ...this.formGeneral.value };
    const id_usuario = this.usuario.id;
    this.guardando.set(true);
    try {
      await firstValueFrom(this.solicitudService.guardar(id_usuario, propsSave));
      this.messageService.add({ severity: 'success', summary: 'Listo', detail: 'Informacion actualizada', life: 1500 });

    }
    catch (exception: any) {
      //console.error(exception["error"]);       
      this.messageService.add({ severity: 'error', summary: 'Ups', detail: 'No se puedo guardar la informacion' });
    }
    finally {
      this.guardando.set(false);
      this._actualizoInformacion.set(false);
    }

  }



  // private obtenerArregloImagenes(object: any) {    
  //   const data: { [key: string]: any } = {};
  //   for (const key in object) {
  //     if (object.hasOwnProperty(key)) {
  //       if (object[key] instanceof Array){
  //         const arreglo = object[key].map((item: any) => {
  //           return { ...item, documento: `${this.URL_API}/documento/${item.id_documento}` };
  //         });
  //         data[key] = arreglo;          
  //       }                      
  //     }      
  //   }        
  //   return data;
  // }

}
