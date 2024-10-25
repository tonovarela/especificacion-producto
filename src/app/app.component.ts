import { Component, computed, inject, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';
import { StatutLogin } from './model/usuario.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private usuarioService = inject(UsuarioService);
   estatusLogin= computed(() => this.usuarioService.StatusSesion().estatus);


  ngOnInit(): void {    
    //this.usuarioService.login('glozada', '55964');
    this.usuarioService.login('danmar', '32568');
    
  }
  
  

 
  
}
