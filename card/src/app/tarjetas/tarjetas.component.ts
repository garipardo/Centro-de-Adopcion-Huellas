import { Component,inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
//Importacion 
import { CommonModule } from '@angular/common';
import { DialogoComponent } from '../dialogo/dialogo.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [MatCardModule,MatButtonModule, CommonModule,DialogoComponent],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
  readonly alerta=inject(MatDialog);
  //METODOS DE LA CLASE
  mostrarAlerta(enterAnimationDuration:string, exitAnimationDuration: string):void{
    this.alerta.open(DialogoComponent, {
      width:'300px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }


  //Datos locales para las macotas
  mascotas=[
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    },
    {
      nombre:'Gasparin',
      edad:'2',
      raza:'Criollo',
      imagen:'https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos/11001596-2-esl-MX/Los-perros-en-libertad-distinguen-las-expresiones-faciales-de-los-humanos.jpg',
      descripcion:'Gasparin es un perro criollo jugueton, le encata correr y esta con todas su vacunas',
    }
    
  ];
 
}
