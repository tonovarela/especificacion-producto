import { Component, inject, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractBaseGridComponent } from "@app/abstract/abstract.baseGrid.component";
import { Solicitud } from "@app/model/solicitud.response";
import { SolicitudService } from "@app/services/solicitud.service";

import { UsuarioService } from "@app/services/usuario.service";
import { environment } from "@env/environment.development";
import { MessageService } from "primeng/api";
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent extends AbstractBaseGridComponent implements OnInit {
  private readonly URL = environment.apiUrl
  private solicitudService = inject(SolicitudService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  solicitudes = signal<Solicitud[]>([]);
  usuarioService = inject(UsuarioService);

  ngOnInit(): void {
    this.autoFitColumns = false;
    this.cargarSolicitudes();
  }

  cargarSolicitudes() {
    this.solicitudService.listar().subscribe(({ solicitudes }) => this.solicitudes.set(solicitudes));
  }

  irDetalle(id_solicitud: string) {
    this.router.navigate(['/detalle', id_solicitud]);
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
    const { checked:activo } = checkbox;
    const { id:id_usuario } = this.usuarioService.StatusSesion().usuario || { id: '0' };
    try {
      await firstValueFrom(this.solicitudService.actualizarConfirmacion({id_solicitud, modulo, activo, id_usuario}));
      this.messageService.add({ severity: 'success', summary: 'Actualización', detail: `Se actualizó correctamente`, life: 500 });
    } catch (error) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `Ocurrió un error al actualizar` });
    }



  }

  verImpresion(solicitud: any) {
    console.log(solicitud.id_solicitud);
    window.open(`${this.URL}/impresion/${solicitud.id_solicitud}`, '_blank');

  }


}
