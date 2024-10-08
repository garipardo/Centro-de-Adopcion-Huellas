import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //Paso 1. Definir la variable contador
  contador: number=0;

  //Paso 2. Metodos o acciones de la clase
  incrementar(){
    this.contador++;
  }
  decrementar(){
    this.contador--;
  }
}
