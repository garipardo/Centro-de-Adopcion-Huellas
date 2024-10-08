import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importacion del componente hijo
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { MenuComponent } from './menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TarjetasComponent, NavegacionComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'card';
}
