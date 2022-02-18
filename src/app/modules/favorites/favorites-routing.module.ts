import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {

    path: '',
    component: FavoritesPageComponent,
    outlet: 'content'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
