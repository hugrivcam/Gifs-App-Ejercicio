import { SearchResponse,Gif } from './../interfaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http'; //HttpParams
import { Injectable } from '@angular/core';

//const URL_GIFS = "https://api.giphy.com/v1/gifs/search?api_key=ieQsKgk6VsqNHwBEFVldbcW5cdZDzWRm&q=valorant&limit=10"

//injectable quiere decir que se puede importar el servicio y estar disponible en cualquier punto, seimpre en en modulo se añada providers: [] al lado de exports:[] y imports:[]
@Injectable({providedIn: 'root'})
export class GifService{
  private _tagsHistory: string[] = [];  
  MAXTAGS:number = 10; 
  constructor(private http:HttpClient) {
    this.CargarHistoryLocalStorage();
    if (this.tagsHistory.length){
      this.searchTag(this._tagsHistory[0]);
    }
  }
  public gifList:Gif[] = [];
  
    get tagsHistory(){
        return [...this._tagsHistory];
    }
    //no se porque no se le llamo añadirTag o algo así, en fin...
    organizarAddTag(tag:string):void
    {
        this._tagsHistory = this._tagsHistory.filter(miTag => miTag.toLowerCase() !== tag.toLowerCase());
        this._tagsHistory.unshift(tag); //añade de primero           
        this._tagsHistory.splice(this.MAXTAGS,1); //recorto el tamaño de la lista
    }
    
    private SaveHistoryLocalStorage():void 
    {
      //localStorage.clear
      //console.log(this._tagsHistory.toString());
      //console.log(JSON.stringify(this._tagsHistory));
      localStorage.setItem("tagsHistory", JSON.stringify(this._tagsHistory));
    }
    
    private CargarHistoryLocalStorage():void
    {
      //let cadena : string | null; 
      const cadena = localStorage.getItem("tagsHistory");
      if (cadena != null ) this._tagsHistory = JSON.parse(cadena);
        //console.log(this._tagsHistory);
    }
    
    maxCards:string = "100";   
    SERVICE_URL ="https://api.giphy.com/v1/gifs/search"  //? le quito el interrogante, ya que el & y el ? los pondran los parametros
    private apiKey:string = "ieQsKgk6VsqNHwBEFVldbcW5cdZDzWRm";
 
    public getTotalImages():number{
      return this.gifList.length;
    }
    public searchTag(tag:string,NoReordenar?:boolean):void{
      if (tag.length){
        if(NoReordenar == undefined)
          this.organizarAddTag(tag);          
        const params = new HttpParams().set('api_key',this.apiKey).set('q',tag).set('limit',this.maxCards);
        this.http.get<SearchResponse>(this.SERVICE_URL,{params})
        .subscribe((res) => 
        {
            this.gifList = res.data;//por referencia
        });
        this.SaveHistoryLocalStorage();
        //¿guardar historial?
      }
    }
    
/*
  //convertimos nuestra funcion en una funcion asincrona que devuelve una promesa, si usamos el fetch
    //async searchTag(tag:string):Promise<void>{
      public searchTag(tag:string,NoReordenar?:boolean):void{
        if (tag.length){
          if(NoReordenar == undefined)
            this.organizarAddTag(tag);
          //el HttpParams() no me lo importa automaticamente, GRRRRRRR
          const params = new HttpParams().set('api_key',this.apiKey).set('q',tag).set('limit',this.maxCards);
          //.set
          //http.get es un objeto observable, hace lo mismo que el fetch pero esto es de angular y sin promesas
          //this.http.get(BASE_URL + tag + "&limit=" + this.maxCards).subscribe(data => {
  
          //esto es una mierda, que tenga que pasar un parmetro entre llaves y se tenga que llamar exacto como pide el metodo get
          this.http.get<SearchResponse>(this.SERVICE_URL,{params})
          .subscribe((res) => {
             //this.miData = [...res.data];
             this.gifList = res.data;//por referencia
             //console.log({gifs:this.gifList});
          });
          /*fetch("https://api.giphy.com/v1/gifs/search?api_key=ieQsKgk6VsqNHwBEFVldbcW5cdZDzWRm&q=valorant&limit=10")
             .then(resp => resp.json())
             .then(data => console.log(data))
          //fetch se utiliza para enviar una solicitud a la API de Giphy para buscar GIFs relacionados con "valorant". La API devolverá una respuesta que contendrá los resultados de la búsqueda, que puedes utilizar en tu aplicación web de JavaScript para mostrar GIFs relacionados
          //fetch() es una función incorporada en JavaScript que se utiliza para realizar solicitudes de recursos en una red, como una API web. Devuelve una promesa que resuelve la respuesta de la solicitud.
          */
          /*const resp = await fetch("https://api.giphy.com/v1/gifs/search?api_key=ieQsKgk6VsqNHwBEFVldbcW5cdZDzWRm&q=valorant&limit=10")
          const data = resp.json();
          data.then(midata => console.log(midata));
          //esto es en java ahora vamos a hacerlo con angular
        }
      } 
*/
}