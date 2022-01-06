import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`

        <h1> {{ titulo }} </h1>
        <h3>La base es: {{base}} </h3>

        <button (click)=" acumularDos(base)"> +{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumularDos(-base)"> -{{base}} </button>

    `
})

export class ContadorComponent {
    public titulo: string = 'Contador app';
    public numero: number = 0;
    public base: number = 5;
  
  
    // sumar(){
    //   this.numero += 1;
    // }
  
    // restar(){
    //   if(this.numero > 0){
    //     this.numero -= 1;
    //   }
    //   else{
    //       this.error = 'Error no hay numero negativos';
    //   }
    // }
    acumularDos(valor:number){
      this.numero += valor;
    }
  
    acumular(valor:number){
      this.numero += valor;
    }
}