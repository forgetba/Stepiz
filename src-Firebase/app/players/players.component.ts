import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Player } from '../models/player';
import { PlayersService } from '../services/players.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'players',
    moduleId: module.id,
	templateUrl: './players.component.html',
	styleUrls: ['./players.component.css']
})

export class PlayersComponent implements OnInit {

	isLoading: boolean = true;
	myPlayers$: Observable<Array<Player>>;
	players: Array<Player>;

	constructor(private playersService: PlayersService) {

	}

	ngOnInit() {
		this.myPlayers$ = this.playersService.fetchPlayers();

		setTimeout(() => {
			this.playersService.savePlayers(this.myPlayers$);
		},100);

		this.playersService.getPlayers().then(players => {
			console.log("bang bang", players);
			this.players=players; 
		});

		this.isLoading = false;		
	}
	
}