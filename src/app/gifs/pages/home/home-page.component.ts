import { Component } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomepageComponent {
   constructor(private miGifService: GifService){};
   get gifs():Gif[]{return this.miGifService.gifList;}
   get TotalGifs():number{
    return this.miGifService.getTotalImages();
   }
}
