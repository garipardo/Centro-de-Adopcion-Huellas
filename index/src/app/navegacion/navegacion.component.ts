import { Component } from '@angular/core';
//importar los tabs
import {MatTabsModule} from '@angular/material/tabs';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { AlertasComponent } from '../alertas/alertas.component';
import { MatButtonModule } from '@angular/material/button';
import { FormularioReactivoComponent } from '../formulario-reactivo/formulario-reactivo.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatTabsModule, TarjetasComponent,AlertasComponent,MatButtonModule, FormularioReactivoComponent, MenuComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
