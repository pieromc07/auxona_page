import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [

	{
		path: '',
		loadChildren: () => import('@modules/discover/discover.module').then(m => m.DiscoverModule)
	},

	{
		path: 'albums',
		loadChildren: ()=> import('@modules/albums/albums.module').then(m => m.AlbumsModule)
	},
	{
		path: 'artists',
		loadChildren: ()=> import('@modules/artists/artists.module').then(m => m.ArtistsModule)
	},
	{
		path: 'favorites',
		loadChildren: ()=> import('@modules/favorites/favorites.module').then(m => m.FavoritesModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
