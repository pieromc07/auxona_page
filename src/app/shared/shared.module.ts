import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderComponent } from './components/header/header.component';
import { CardVerticalComponent } from './components/card-vertical/card-vertical.component';
import { CardHorizontalComponent } from './components/card-horizontal/card-horizontal.component';
import { CardCircularComponent } from './components/card-circular/card-circular.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';


@NgModule({
	declarations: [
		SideBarComponent,
		MediaPlayerComponent,
		HeaderComponent,
		CardVerticalComponent,
		CardHorizontalComponent,
		CardCircularComponent,
		SectionGenericComponent
	],
	imports: [
		CommonModule,
	],
	exports: [

		SideBarComponent,
		MediaPlayerComponent,
		HeaderComponent,
		CardVerticalComponent,
		CardHorizontalComponent,
		CardCircularComponent,
		SectionGenericComponent

	]
})
export class SharedModule { }
