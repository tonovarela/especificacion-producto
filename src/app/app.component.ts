import { Component, computed, inject, OnInit } from '@angular/core';
import { UsuarioService } from '@services/usuario.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private usuarioService = inject(UsuarioService);
   estatusLogin= computed(() => this.usuarioService.StatusSesion().estatus);


  ngOnInit(): void {    
  this.usuarioService.login('CTP', '98233');
    //this.usuarioService.login('erivera', '29170');
    //this.usuarioService.login('danmar', '32568');
    
  }
  
  

 
  
}
