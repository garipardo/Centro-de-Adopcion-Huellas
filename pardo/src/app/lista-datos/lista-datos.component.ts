import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


//Paso 1. Atibutos de la interfaz
interface Datos{
  nombre: string;
  estado: boolean;
}


@Component({
  selector: 'app-lista-datos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './lista-datos.component.html',
  styleUrl: './lista-datos.component.css'
})
export class ListaDatosComponent {
nuevoDato: string='';
datos: Datos[]=[];


//Paso 2. Crear el metodo de la clase
agregarDatos(){
  if(this.nuevoDato.trim()!==''){
    this.datos.push({nombre:this.nuevoDato,estado:false});
    this.nuevoDato='';
  }
}

//Metodo para eliminar dato
eliminarDato(index:number){
  this.datos.splice(index,1);
}

//Verificar Dato
verificarDato(index:number){
  this.datos[index].estado=!this.datos[index].estado;
}

}
