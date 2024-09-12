import { Component } from '@angular/core';
//importar los tabs
import {MatTabsModule} from '@angular/material/tabs';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [MatTabsModule, TarjetasComponent],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
