import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
 }from '@angular/material/dialog';
 import { DialogoComponent } from '../dialogo/dialogo.component';


@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [MatButtonModule,DialogoComponent],
  templateUrl: './alertas.component.html',
  styleUrl: './alertas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertasComponent {
  readonly alerta=inject(MatDialog);
    //METODOS DE LA CLASE
    mostrarAlerta(enterAnimationDuration:string, exitAnimationDuration: string):void{
      this.alerta.open(DialogoComponent, {
        width:'300px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
}
