import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-prueba-boton',
  standalone: true,
  imports: [MatButton],
  templateUrl: './prueba-boton.component.html',
  styleUrl: './prueba-boton.component.css'
})
export class PruebaBotonComponent {

  enviarWhatsapp(){
    const numero='72467053'
    const mensajes='nesecito mayor informacion de la mascota'
    const url=`https://api.whatsapp.com/send?phone=${numero}&text=${mensajes}`;
    window.open(url);
  }

}
