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
      apiKey:''
    });
    //Paso 6. Configurar el id de la base de datos
    this.base=Airtable.base('');
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
              edad:registro.get('Edad'),
              sexo:registro.get('Sexo'),
              contacto:registro.get('NumeroContacto'),
              foto:registro.get('Foto'),
              tipoMascota:registro.get('TipoMascota'),
              descripcion:registro.get('Descripcion')
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

  //Paso 7. Crear el metodo para obtener los registros de la tabla Mascotas
  obtenerAdoptantes():
  Observable<any[]>{
    return from(new Promise<any[]>((resolve,reject)=>{
      const registros:any[]=[];
      this.base('Adoptantes').select({
        view:'Grid view'
      }).eachPage(
        function page(records: any[],siguiente: () => void){
          //Agregar los registros obtenidos a nuestra lista
          records.forEach(registro=>{
            registros.push({
              id:registro.id,
              nombre:registro.get('nombre'),
              celular:registro.get('celular'),
              correo:registro.get('correo'),
              tipoMascota:registro.get('tipoMascotas'),
              nombreMascota:registro.get('nombreMascota'),
              razon:registro.get('razon'),
              direccion:registro.get('direccion'),
              ci:registro.get('ci')
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
  
  //Metodo para añadir un nuevo registro a la base de datos
  añadirAdoptante(datos:any):
  Observable<any>{
    return from(
      new Promise<any>((resolve,reject)=>{
        this.base("Adoptantes").create([
          {
            "fields":{
              "nombre":datos.nombre,
              "celular":datos.celular,
              "correo":datos.correo,
              "tipoMascotas":datos.tipoMascota,
              "nombreMascota":datos.nombreMascota,
              "razon":datos.razon,
              "direccion":datos.direccion,
              "ci":datos.ci
            }
          }
        ], function(error:any, registros:any[]){
          if(error){
            reject(error);
            return;
          }
          resolve(registros);
        });      
  }));
  }
}