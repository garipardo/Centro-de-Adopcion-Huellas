import { Component } from '@angular/core';
//importar los tabs
import {MatTabsModule} from '@angular/material/tabs';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { AlertasComponent } from '../alertas/alertas.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatTabsModule, TarjetasComponent,AlertasComponent,MatButtonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
