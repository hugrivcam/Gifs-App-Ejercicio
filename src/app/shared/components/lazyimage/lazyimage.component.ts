import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyimage.component.html'
})
export class LazyimageComponent implements OnInit{ 
  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  public hasLoaded: boolean = false;

  ngOnInit():void{
      if(!this.url){
          throw new Error("Invalid URL");
      }
  }

  onLoad() 
  {
    //console.log("img loaded")
    setTimeout(() => {
      this.hasLoaded = true; //al meter el time out puedo apreciar siempre como tardan las imagenes en cargar al menos 1 segundo
    },200);
    //alert("hola");

  }
}
