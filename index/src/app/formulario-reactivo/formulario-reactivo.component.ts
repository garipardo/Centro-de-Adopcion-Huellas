import { Component } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [
    MatStepperModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {
  primerFormulario: FormGroup;
  segundoFormulario:FormGroup;
  tercerFormulario:FormGroup;

  //dEFINIR EL CONSTRUCTOR DE LA CLASE
  constructor(private _formBuilder: FormBuilder){
    //pASO 2. Definir el formulario del primer paso (Informacion personal)
    this.primerFormulario=this._formBuilder.group({
      nombre:['', Validators.required],
      celular:['',Validators.required],
      correo: ['',Validators.required]
    });

    //Definir el formulario del paso 2 (Informacion mascota)
    this.segundoFormulario=this._formBuilder.group({
      tipoMascota:['',Validators.required],
      nombreMascota:['',Validators.required],
      razon:['',Validators.required]
    });

    //Definir el tercer formulario 
    this.tercerFormulario=this._formBuilder.group({
      direccion: ['',Validators.required],
      ci:['',Validators.required]
    });
  }
  //Metodo para enviar el formulario 
  enviarFormulario():void{
    if(this.primerFormulario.valid && this.segundoFormulario.valid && this.tercerFormulario.valid ){
      const datosFormulario={
        ...this.primerFormulario.value,
        ...this.segundoFormulario.value,
        ...this.tercerFormulario.value,
      };
      console.log(datosFormulario);
      //En esta seccion uniremos los datos a la BASE DE DATOS
    }
  }
}
