import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
     declarations: [
         HeroeComponent,
         ListadoComponent
     ],
     exports: [
         HeroeComponent,
         ListadoComponent //<==todo lo que quiero que sea visible para toda la aplicación
     ],
     imports: [
         CommonModule
     ]

})
export class HeroesModule {}