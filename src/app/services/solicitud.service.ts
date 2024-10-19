import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ResponseSolicitud } from '@app/model/solicitud.response';

interface SolicitudModel {
  id_solicitud:string;
  customer?:any;
  disenioEstructural?:any;
  cotizacion?:any;
  planeacion?:any;
  prePrensa?:any;  
}
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private http = inject(HttpClient);
  private readonly URL=environment.apiUrl;

  public guardar(id_usuario:string,props:SolicitudModel){
    return this.http.post(`${this.URL}/solicitud`,{id_usuario,...props});

  }

  public obtener(id_solicitud:string,conBase64=false){
    return this.http.get<ResponseSolicitud>(`${this.URL}/solicitud/${id_solicitud}?conBase64=${conBase64}`);
  }


}
