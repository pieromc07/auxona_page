import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {


	mainMenu: Array<any> = [];
	libraryMenu: Array<any> = [];
	playlistMenu: Array<any> = [];

	isToggled: String = 'close' || '';

	constructor() { }

	ngOnInit(): void {

		this.mainMenu = [
			{

				name: 'Discover',
				icon: 'fas fa-th-large',
				router: ['/']
			},
			{
				name: 'Genres',
				icon: 'fas fa-volume-up',
				router: ['/', 'genres']
			},
			{
				name: 'Albums',
				icon: 'fas fa-compact-disc',
				router: ['/', 'albums']
			},
			{
				name: 'Artists',
				icon: 'fas fa-microphone',
				router: ['/', 'artists']
			},
		];

		this.libraryMenu = [
			{
				name: 'Recent',
				icon: 'fas fa-clock',
				router: ['/', 'library', 'recent']
			},
			{
				name: 'Favorites',
				icon: 'fas fa-heart',
				router: ['/', 'library', 'favorites']
			},
			{
				name: 'Playlists',
				icon: 'fas fa-list',
				router: ['/', 'library', 'playlists']
			}

		];

		this.playlistMenu = [
			{
				name: 'Create new',
				icon: 'fas fa-plus-circle',
				router: ['/', 'playlist', 'create']
			}
		];
	}

	toggleSideBar() {
		this.isToggled =
			this.isToggled === 'close' ? '' : 'close';
	}

}
