import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ResponseBitacora, ResponseListadoSolicitud, ResponseSolicitud, SolicitudModel } from '@app/model/solicitud.response';

interface PropsActualizarConfirmacion{
  activo:boolean;
  id_solicitud:string;
  modulo:string;
  id_usuario:string;
}

interface PropsActualizarEstado{
  id_estado:string;
  id_solicitud:string;
  motivo:string;
  id_usuario:string;
}

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private http = inject(HttpClient);
  private readonly URL=`${environment.apiUrl}/api`;

  public guardar(id_usuario:string,props:SolicitudModel){
    return this.http.post(`${this.URL}/solicitud`,{id_usuario,...props});
  }

  public listar(todas=false,estado='pendientes'){
    return this.http.get<ResponseListadoSolicitud>(`${this.URL}/solicitud?todas=${todas}&estado=${estado}`);
  }

  public listarCanceladas(){
    return this.http.get<ResponseListadoSolicitud>(`${this.URL}/solicitudes/canceladas`);
  }

  public actualizarConfirmacion(props:PropsActualizarConfirmacion){
    const  {activo,id_solicitud,modulo,id_usuario}     = props;
    return this.http.put(`${this.URL}/solicitud/${id_solicitud}/${modulo}`,{activo,id_usuario});
  }

  public obtener(id_solicitud:string,conBase64=false){
    return this.http.get<ResponseSolicitud>(`${this.URL}/solicitud/${id_solicitud}?conBase64=${conBase64}`);
  }

  public obtenerBitacora(id_solicitud:string){
    return this.http.get<ResponseBitacora>(`${this.URL}/solicitud/${id_solicitud}/bitacora`);
  }

  public actualizarEstado(props:PropsActualizarEstado){
    const {id_estado,id_solicitud,motivo,id_usuario} = props;
    return this.http.put(`${this.URL}/solicitud/actualizarEstado`,{id_estado,motivo,id_usuario,id_solicitud});

  }


}
