import { Component, inject, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { AbstractBaseGridComponent } from "@app/abstract/abstract.baseGrid.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent  extends AbstractBaseGridComponent  implements OnInit{
  solicitudes = signal<any[]>([{id: "be0425c8-4dc6-4d59-a3c7-9b3c8b07fd8a", nombre: 'Nombre del trabajo', fecha: '2021-10-10', area: 'Customer', estado: 'En proceso'},]);
  router= inject(Router);
  ngOnInit(): void {
    this.autoFitColumns = false;    
    this.iniciarResizeGrid(0.2);
  }

  irDetalle(id: string) {
    this.router.navigate(['/detalle', id]);
  }


 
}
