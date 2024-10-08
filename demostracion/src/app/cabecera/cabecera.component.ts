import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

  irFacebook(){
    window.open('https://www.facebook.com/share/s4BvYES8rjMzmJvX/?mibextid=qi2Omg')
  }
  irTiktok(){
    window.open('https://www.tiktok.com/@adopta__..123?_t=8q9mVDcHP2j&_r=1')
  }
}
