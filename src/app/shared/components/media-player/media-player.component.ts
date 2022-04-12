import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.scss']
})
export class MediaPlayerComponent implements OnInit {

  tracks: any = [
    {
      name_track: "Tiempo",
      album_image: "https://i.scdn.co/image/ab67616d0000b2736f933303d143a686589c76d1",
      artist: "C.Tangana"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
