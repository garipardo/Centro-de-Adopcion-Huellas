import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
//import { AlertasComponent } from '../alertas/alertas.component';
import { MatButtonModule } from '@angular/material/button';
import { FormularioComponent } from '../formulario/formulario.component';
import { PantallaInicioComponent } from '../pantalla-inicio/pantalla-inicio.component';
import { PruebaBotonComponent } from '../prueba-boton/prueba-boton.component';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatTabsModule,
    TarjetasComponent,
    MatButtonModule,
    PantallaInicioComponent, FormularioComponent, PruebaBotonComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
