import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';


@NgModule({
  declarations: [
    HeaderUserComponent,
    MediaPlayerComponent,
    SideBarComponent,
    SectionGenericComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule, MatProgressBarModule
  ], exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent, SectionGenericComponent
  ]
})
export class SharedModule { }
