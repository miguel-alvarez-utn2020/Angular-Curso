import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  @Input () personaje:Personaje = {
    nombre: '',
    poder  : 0
  }

  cambiarNombre( event: any ){
    console.log( event );
    console.log('aca cambiar nombre');
  }

  constructor(private dbzService:DbzService){}
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){
    
    console.log('agragando');
    if(this.personaje.nombre.trim().length === 0){ return; }

    console.log(this.personaje);
    // this.onNuevoPersonaje.emit( this.personaje );
    this.dbzService.agregarPersonaje(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }
    
  }

}
