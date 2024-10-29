import { Component, computed, effect, EffectRef, inject, OnDestroy, OnInit } from '@angular/core';
import { environment } from '@env/environment.development';
import { UsuarioService } from '@services/usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private usuarioService = inject(UsuarioService);
  estatusLogin = computed(() => this.usuarioService.StatusSesion().estatus);
  effectLogin: EffectRef;

  constructor() {
    this.effectLogin = effect(() => {    
      if (this.estatusLogin() === 'LOGOUT' ) {
        const esProduccion = environment.production;
        if (esProduccion) {
          window.location.href = "/litoapps";
          localStorage.removeItem("User");
          localStorage.removeItem("Pass");
          return;
        }

      };
    });

  }
  ngOnDestroy(): void {
    this.effectLogin.destroy();
  }


  ngOnInit(): void {    
    this.usuarioService.verificarSesionLitoapps();

  }





}
