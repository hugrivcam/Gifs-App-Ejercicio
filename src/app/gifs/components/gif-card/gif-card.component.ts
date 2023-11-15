import { Component,Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  })
export class GifsCardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  ngOnInit(): void 
  {
      if (!this.gif) throw new Error('Gif Property is requered')
  }

  decirHola():void{alert('hola');}
}

