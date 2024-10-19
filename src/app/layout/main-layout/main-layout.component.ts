import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {


  logout() {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    // Aquí puedes añadir la lógica para cerrar sesión, como redirigir al usuario a la página de inicio de sesión
  }
}
