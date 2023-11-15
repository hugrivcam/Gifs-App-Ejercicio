import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomepageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardComponent } from './components/gif-card/gif-card.component';

//import { LazyimageComponent } from '../shared/components/lazyimage/lazyimage.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent,
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports:[HomepageComponent]
})
export class GifsModule { }
