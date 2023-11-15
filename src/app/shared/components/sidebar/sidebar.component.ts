import { GifService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
   //private miLista:string[] = [];
   //private gifService:GifService = new GifService(); //distinta instancia de la que hay en el search-box
   constructor(private gifService:GifService) {} //misma instancia de la que hay en el search-box
   //constructor() {}
   get tagList():string[] {
     //alert('paso por aqui'); 
     return this.gifService.tagsHistory;// ya me devuelve un nuevo objeto, asi que no necesito ... para cortar la referencia
      
   }
   
   enviarTag(tag:string):void
   {
     //console.log("Enviar gif SIDEBAR: "+ tag);
     this.gifService.searchTag(tag,true);
   }
   //ya tengo la lista ahora solo tengo que recorrela con el ngfor
   //actualizaMiLista():void {
   //  this.miLista = this.tagList; 
   //}
}
