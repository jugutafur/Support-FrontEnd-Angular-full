import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  lista = ["FrontEnd", "BackEnd", "Testing", "BD", "Frameworks", "Librerias", "Arquitecturas", "Transversales","Servidores"];
  dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

  constructor() { }

}
