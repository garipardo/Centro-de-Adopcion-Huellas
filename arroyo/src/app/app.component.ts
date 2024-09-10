import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importar el componente hijo
import { PruebaComponent } from './prueba/prueba.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaDatosComponent } from './lista-datos/lista-datos.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    PruebaComponent,
    ImagenesComponent,
    BarraNavegacionComponent,
    ContadorComponent,
    ListaDatosComponent,
    AngularmaterialComponent

    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'arroyo';
  
}
