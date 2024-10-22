import { computed, Injectable, signal } from '@angular/core';
import { StatutLogin, Usuario } from '@app/model/usuario.interface';

interface StatusSesion {
  usuario?:Usuario;
  estatus:StatutLogin
}
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _statusSesion= signal<StatusSesion>(
     {  
      usuario: { id: '1', nombre: 'Juan', usermane: 'juanito', areasPermitidas: ["customer"]},
      estatus: StatutLogin.LOGIN
     }
  );
   
  constructor() { }

  StatusSesion = computed(() => {
    return this._statusSesion();
  });

  

}
