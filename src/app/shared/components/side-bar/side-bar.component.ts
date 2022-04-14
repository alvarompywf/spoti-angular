import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  MainMenu: {
    navBarItems: Array<any>, navBarItems2: Array<any>, listas: Array<any>
  } = {
      navBarItems: [
        {
          name: "Home",
          icon: "uil-estate",
          router: ['/']
        }, {
          name: "Buscar",
          icon: "uil-search",
          router: ['/']
        }, {
          name: "Bliblioteca",
          icon: "uil-books",
          router: ['/']
        }
      ],
      navBarItems2: [
        {
          name: "Crear Lista",
          icon: "uil-plus"
        }, {
          name: "Canciones que me gustan",
          icon: "uil-heart"
        }
      ],
      listas: [
        {
          name: "C.Tangana sound",
          router: ['/']
        }, {
          name: "Yung Beef list",
          router: ['/']
        }
        , {
          name: "Descubrimiento Semanal",
          router: ['/']
        }
      ]
    }


  constructor() { }

  ngOnInit(): void {
  }

}
