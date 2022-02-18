import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverPageComponent } from './pages/discover-page/discover-page.component';
import { SharedModule } from '@shared/shared.module';


import { CarouselModule } from 'primeng/carousel'
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    DiscoverPageComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    SharedModule,
    CarouselModule,
    ButtonModule,
    ToastModule
  ],
  providers: [],
})
export class DiscoverModule { }
