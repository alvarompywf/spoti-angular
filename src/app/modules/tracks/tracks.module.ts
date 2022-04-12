import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksPagesComponent } from './pages/tracks-pages/tracks-pages.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    TracksPagesComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule, FlexLayoutModule
  ]
})
export class TracksModule { }
