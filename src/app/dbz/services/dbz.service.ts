import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _listaPersonajes:Personaje[] = [

        {
          nombre:'goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 1200
        }
    
      ];

    get perosonajes():Personaje[]{
        return [...this._listaPersonajes];
    } 
    constructor(){
        console.log('Servicio Inicio');
    }

    agregarPersonaje(personaje:Personaje){
        this._listaPersonajes.push(personaje);
    }
}