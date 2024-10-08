import { Injectable } from '@angular/core';

import Airtable from 'airtable';

import { environment } from '../environments/environment';

import { Observable, from } from 'rxjs';
import { promises } from 'dns';
import { resolve } from 'path';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AirtableService {
  
  private base:any;

  constructor() {

    Airtable.configure({
      endpointUrl:'https://api.airtable.com',
      apiKey:environment.airtableToken,
    });

    this.base=Airtable.base(environment.AirtableBase)
   }

   obtenerMascotas():
   Observable<any[]>{
    return from(new Promise<any[]>((resolve,reject)=>{
      const registros:any[]=[];
      this.base('Mascotas 1').select({
        view:'Grid View'
      }).eachPage(
        function Page(records,siguiente){
          records.forEach(registros=>{
            registros.push({
              id:registros.id,
              nombre:registros.get('nombre'),
              edad:registros.get('edad'),
              sexo:registros.get('sexo'),
              contacto:registros.get('contacto'),
              foto:registros.get('foto'),
              tipoMascota:registros.get('tipoMascota'),
              descripcion:descripcion.get('descripcion')

            });
          });
          siguiente();
        },
        function salir(error){
          if(error){
            reject(error);

          }else{
            resolve(registros)
          }
        }
      );
    }));
   }
}
