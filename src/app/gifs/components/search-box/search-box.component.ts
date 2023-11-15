import { GifService } from './../../services/gifs.service';
import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'gifs-search-box',
    template: `
       <h5>Buscar:</h5>
       <!--
        <input type="text" class= "form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTag(txtTag.value)" #txtTag>
        -->
        <input type="text" class= "form-control" placeholder="Buscar gifs..." (keyup.enter)="searchTagRef()" #txtTag name = "txtTag">
    `
})

export class SearchBoxComponent implements OnInit {
    @ViewChild('txtTag') //binding to #txtTag
    public tagInput!: ElementRef<HTMLInputElement>;//de esta forma tagInput siempre tiene una referencia al texto de txtTag
    //private gifService: GifService = new GifService(); 
    //private gifService: GifService = new GifService(); //injectamos el servicio que era injectable, lo hice como propiedad pero explican 
    // que se hace en el constructor de forma que queda constructor(private gifService:GifService){}, porque sino estas creando una instancia nueva e independiente no relacionada desde otros componentes
    constructor(private gifService:GifService) { }//añade la propiedad en la clase si necesidad de usar el new
    //constructor(){}

    //@Output()
    //public onNewTag: EventEmitter<string> = new EventEmitter();

    searchTagRef()
    {
      const newTag:string = this.tagInput.nativeElement.value;  
      this.gifService.searchTag(newTag);//añado en el array disponible en el servicio un item arriba del todo, LUEGO BUSCAR LAS CARDS RELACIONADAS AL TAG DADO
      //alert(newTag);
      this.tagInput.nativeElement.value = "";//vacio mis el cuadro de texto que esta en este template
    }

/*    searchTag(newTag:string)
    {
       alert(newTag);
    }
*/
    ngOnInit() { }

}