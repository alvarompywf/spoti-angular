
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import("./../tracks/tracks.module").then(data => data.TracksModule)
  },
  {
    path: 'history',
    loadChildren: () => import("./../history/history.module").then(data => data.HistoryModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import("./../favourites/favourites.module").then(data => data.FavouritesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
