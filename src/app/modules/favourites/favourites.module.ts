import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritePagesComponent } from './pages/favourite-pages/favourite-pages.component';


@NgModule({
  declarations: [
    FavouritePagesComponent
  ],
  imports: [
    CommonModule,
    FavouritesRoutingModule
  ]
})
export class FavouritesModule { }
