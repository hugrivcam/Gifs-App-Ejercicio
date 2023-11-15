import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];//obligamos que en el html donde se llama a <gif-card-list [getter o lo que sea????]="gifs"> </gif-card-list> le tengamos que pasar el parametro asociado a Input
  //ahora cada vez que cargo la pagina tengo mi array de gifs asociado, que puede estar vacio o lleno

}
