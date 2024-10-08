import { Injectable } from '@angular/core';
//Paso 1. Importar Airtable
import Airtable from 'airtable';
//Paso 2. Importar las variables de entorno
//import { environment } from '../environments/environment';
//Paso 3. Importar la conexion con el servicio y angular
import { Observable, from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AirtableService {
  //Paso 4. Crear la varaibel de conexion
  private base:any;
  constructor() { 
    //Paso 5. Configurar la conexion con Airtable para token y el idBase
    Airtable.configure({
      endpointUrl:'https://api.airtable.com',
      apiKey:'patE0JiLbvX9sDsAb.690748d61fbf8287638df0110d95809794817f88d89cfae4bb1f8e80e14c40d3'
    });
    //Paso 6. Configurar el id de la base de datos
    this.base=Airtable.base('appM5ZglYr20QuxV5');
  }
  //Paso 7. Crear el metodo para obtener los registros de la tabla Mascotas
  obtenerMascotas():
  Observable<any[]>{
    return from(new Promise<any[]>((resolve,reject)=>{
      const registros:any[]=[];
      this.base('Mascotas').select({
        view:'Grid view'
      }).eachPage(
        function page(records: any[],siguiente: () => void){
          //Agregar los registros obtenidos a nuestra lista
          records.forEach(registro=>{
            registros.push({
              id:registro.id,
              nombre:registro.get('Nombre'),
              edad:registro.get('edad'),
              sexo:registro.get('sexo'),
              contacto:registro.get('contacto'),
              foto:registro.get('foto'),
              tipoMascota:registro.get('tipoMascota'),
              descripcion:registro.get('descripcion')
            });
          });
          siguiente();

        },
        function salir(error: any){
          if(error){
            reject(error);
          }else{
            resolve(registros);
          }
        }
      );
    }));
  }
}