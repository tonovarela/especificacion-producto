import { Component, computed, inject } from '@angular/core';
import { UsuarioService } from '@app/services/usuario.service';



@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent  {
  private usuarioService  = inject(UsuarioService);
  usuario = computed(() =>     {
  const usuario = this.usuarioService.StatusSesion().usuario ?? { nombre: '', id:"-1",personal: null ,areasPermitidas:[]}; 
    return {...usuario,personal: usuario?.personal ?? 'XXXX'} 
  }

);
  



  logout() {    
      this.usuarioService.logout();
    
  }
}
