import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { FlexModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    HomePagesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FlexModule
  ]

})
export class HomeModule { }
