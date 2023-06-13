import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './pages/home/home-page.component';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { cardListComponent } from './components/card-list/card-list.component'


@NgModule({
  declarations: [
    HomePageComponent,
    searchBoxComponent,
    cardListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
    // searchBoxComponent // No hace falta exportarlo pq solo lo usaré dentro de homePage
    // cardListComponent //  No hace falta exportarlo pq solo lo usaré dentro de homePage
  ]
})

export class GifsModule { }
