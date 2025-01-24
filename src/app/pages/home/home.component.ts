import { Component, inject, OnInit, signal, effect, EffectRef, OnDestroy, computed } from '@angular/core';
import { Router } from "@angular/router";
import { AbstractBaseGridComponent } from "@app/abstract/abstract.baseGrid.component";
import { Bitacora, Estado, Solicitud } from "@app/model/solicitud.response";
import { SolicitudService } from "@app/services/solicitud.service";

import { UsuarioService } from "@app/services/usuario.service";
import { environment } from "@env/environment.development";
import { ConfirmationService, MessageService } from "primeng/api";
import Swal from 'sweetalert2'
import { firstValueFrom } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ConfirmationService, MessageService]
})

export class HomeComponent extends AbstractBaseGridComponent implements OnInit {
  private readonly URL = environment.apiUrl
  private solicitudService = inject(SolicitudService);
  private messageService = inject(MessageService);

  verValidas = true;
  private router = inject(Router);




  solicitudes = signal<Solicitud[]>([]);
  usuarioService = inject(UsuarioService);

  bitacoraVisible = false;
  estados = signal<Estado[]>([]);

  puedeCambiarEstado = this.usuarioService.puedeCambiarEstado;

  bitacoras = signal<{ cargando: boolean, value: Bitacora[] }>({ value: [], cargando: false });


  estadoSeleccionado ='pendientes';
    
  opcionesView = [
      { name: 'Pendientes', value: 'pendientes' },
      { name: 'Cerrado', value: 'cerrado' },
      { name: 'Cancelado', value: 'cancelado' }
  ];


  ngOnInit(): void {
    this.autoFitColumns = false;
    this.cargarSolicitudes(true);
  }



  solicitudesView = computed(() => {
    const solicitudes = this.solicitudes().map(s => {
      return {
        ...s,
        sePuedeEditar: s.id_estado == "2",
        sepuedeCerrar: this.tieneTodasLasConfirmaciones(s),
        puedeConfirmaProduccionCalidad: this.puedeConfirmarProduccionCalidad(s)
      }
    })


    return solicitudes;

  });



  async capturarMotivoCancelacion(): Promise<{ confirma: boolean, mensaje: string }> {
    return new Promise((resolve) => {
      Swal.fire({
        title: 'Motivo de Cancelación',
        input: 'textarea',
        inputPlaceholder: 'Escribe el motivo de la cancelación...',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        inputValidator: (value) => {
          if (!value) {
            return 'Debes escribir un motivo!';
          }
          return null;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          resolve({ confirma: true, mensaje: result.value });
        } else {
          resolve({ confirma: false, mensaje: '' });
        }
      });
    });

  }


  private setEstadoSolicitud(id_solicitud: string, id_estado: string) {
    this.solicitudes.set(this.solicitudes().map(s => s.id_solicitud === id_solicitud ? { ...s, id_estado: id_estado } : s));
  }

  async actualizarEstado(event: Event, { id_solicitud, id_estado }: Solicitud) {
    const dropdown = event.target as HTMLInputElement;
    const nuevoEstado = dropdown.value;
    let motivo = "";
    if (nuevoEstado === "3") {
      const { mensaje, confirma } = await this.capturarMotivoCancelacion();
      motivo = mensaje;
      if (!confirma) {                //Regresa a su estado anterior
        this.setEstadoSolicitud(id_solicitud, id_estado!);
        return;
      }
    }
    //Actualizar el estado de la solicitud
    const req = {
      id_estado: nuevoEstado,
      id_solicitud,
      motivo,
      id_usuario: this.usuarioService.StatusSesion().usuario?.id || '0'
    };
    try {
      await firstValueFrom(this.solicitudService.actualizarEstado(req));
      this.cargarSolicitudes();
    } catch (error) {
      this.setEstadoSolicitud(id_solicitud, id_estado!);
    }

  }


  cargarSolicitudes(recargarEstados = false) {
   
    if (this.verValidas) {
      const todas = this.puedeCambiarEstado(); //Traer todas las solicitudes si el usuario puede ver confirmaciones
      this.solicitudes.set([]);
      const estado =this.estadoSeleccionado;
      this.solicitudService.listar(todas,estado).subscribe(({ solicitudes, estados }) => {        
        this.solicitudes.set(solicitudes);
        if (recargarEstados) {
          this.estados.set(estados);
        }
      });
    } else {
      this.solicitudService.listarCanceladas().subscribe(({ solicitudes, estados }) => {
        this.solicitudes.set(solicitudes);
      });
    }

  }

  irDetalle(id_solicitud: string) {
    this.router.navigate(['/detalle', id_solicitud]);
  }

  mostrarBitacora(id_solicitud: string) {
    this.bitacoraVisible = true;
    this.bitacoras.set({ value: [], cargando: true });
    this.solicitudService.obtenerBitacora(id_solicitud).subscribe((response) => {
      this.bitacoras.set({ value: response.bitacora, cargando: false });
    });

  }

  puedeConfirmarArea(nombre: string) {
    if (!this.usuarioService.StatusSesion().usuario?.areasPermitidas) {
      return false;
    }
    return this.usuarioService.StatusSesion().usuario?.areasPermitidas.includes(nombre);
  }

  async cambiar(event: Event, modulo: string, solicitud: Solicitud): Promise<void> {
    const checkbox = event.target as HTMLInputElement;
    const { id_solicitud } = solicitud;
    const { checked: activo } = checkbox;
    const { id: id_usuario } = this.usuarioService.StatusSesion().usuario || { id: '0' };
    try {
      await firstValueFrom(this.solicitudService.actualizarConfirmacion({ id_solicitud, modulo, activo, id_usuario }));
      this.solicitudes.set(this.solicitudes().map(s => s.id_solicitud === id_solicitud ? { ...s, [modulo]: activo ? "1" : "0" } : s));
      this.messageService.add({ severity: 'success', summary: 'Actualización', detail: `Se actualizó correctamente`, life: 500 });
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `Ocurrió un error al actualizar` });
    }
  }




  private tieneTodasLasConfirmaciones(solicitud: Solicitud) {
    return solicitud.customer == "1" && solicitud.disenioEstructural == "1"
      && solicitud.cotizacion == "1" && solicitud.planeacion == "1"
      && solicitud.prePrensa == "1" && solicitud.logistica == "1" && solicitud.produccion == "1"
      && solicitud.calidad == "1" && solicitud.offset == "1";

  }
     //Esta regla es para que solo se pueda confirmar en producción y calidad si el usuario tiene permisos
  private puedeConfirmarProduccionCalidad(solicitud: Solicitud) {
    if (this.puedeConfirmarArea('produccion') || this.puedeConfirmarArea('calidad')) {
      return solicitud.customer == "1"
        && solicitud.disenioEstructural == "1"
        && solicitud.cotizacion == "1"
        && solicitud.planeacion == "1"
        && solicitud.prePrensa == "1"
        && solicitud.offset == "1"
        && solicitud.logistica == "1";

      ;
    }
    return true;


  }





  verImpresion(solicitud: any) {
    console.log(solicitud.id_solicitud);
    window.open(`${this.URL}/impresion/${solicitud.id_solicitud}`, '_blank');

  }


}
