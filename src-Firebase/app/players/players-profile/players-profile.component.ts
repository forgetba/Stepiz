import { Component, OnInit } from '@angular/core';
import { Player } from '~/app/models/player';
import { PlayersService } from '~/app/services/players.service';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'players-profile',
    moduleId: module.id,
	templateUrl: './players-profile.component.html',
	styleUrls: ['./players-profile.component.css']
})

export class PlayersProfileComponent implements OnInit {

	isLoading: boolean = true;
	player: Player;

	constructor(private playersService: PlayersService, private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
	}

	ngOnInit() { 
		const id = this.route.snapshot.params["id"];
		this.playersService.getPlayer(id).then(player => {
			this.player=player;
			this.isLoading = false;
		});
	}

	onBackButtonTap(): void {
        this.routerExtensions.back();
    }
	
}