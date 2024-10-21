import { AfterViewInit, Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const userMenuButton = document.getElementById('user-menu-button')!;
    const userDropdown = document.getElementById('user-dropdown')!;

    userMenuButton.addEventListener('click', function() {
      userDropdown.classList.toggle('hidden');
      userDropdown.classList.toggle('translate-y-0');
      userDropdown.classList.toggle('opacity-100');
    });

    document.addEventListener('click', function(event: any) {
      const targetElement = event.target!; // clicked element
      if (userDropdown && !userDropdown.contains(targetElement) && !userMenuButton.contains(targetElement)) {
        userDropdown.classList.add('hidden');
        userDropdown.classList.remove('translate-y-0');
        userDropdown.classList.remove('opacity-100');
      }
    });
  }


  logout() {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
    // Aquí puedes añadir la lógica para cerrar sesión, como redirigir al usuario a la página de inicio de sesión
  }
}
