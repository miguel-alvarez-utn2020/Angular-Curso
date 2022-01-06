import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

    heroes: string[] = ['SpiderMan', 'Hulk', 'IronMan', 'Thor', 'goku'];
    heroeBorrado:string[] = [];
    

    borraHeroe(){
      const heroe = this.heroes.shift() || '';
      this.heroeBorrado.push(heroe);
    }

    

}
