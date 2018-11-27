import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { ResultsService } from '../services/results.service';
import { Player } from '../models/player';
import { Game } from '../models/game';
import { Switch } from 'tns-core-modules/ui/switch/switch';

@Component({
	selector: 'home',
    moduleId: module.id,
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    
	addingPlayer: boolean=false;
	addingGame: boolean=false;
	player: Player;
	name: string;
	nb: number;
	goals: number;
	win: boolean;

	constructor(private playersService: PlayersService, private resultsService: ResultsService) { 
		setTimeout(() => {}, 2000)
	}

	ngOnInit() { }

	onPlayerAdd() : void {
		this.name="";
		this.nb=null;
		this.goals=null;
		this.addingPlayer=true;
		this.addingGame=false;
	}

	onGameAdd() : void {
		this.name="";
		this.nb=null;
		this.goals=null;
		this.addingGame=true;
		this.addingPlayer=false;
	}

	public onChecked(args) {
        let firstSwitch = <Switch>args.object;
        if (firstSwitch.checked) {
            this.win = true;
        } else {
            this.win = false;
        }
    }

	onSubmit() : void {
		if (this.addingPlayer) {
			this.playersService.addPlayer(new Player(this.name, +this.nb, +this.goals));
			this.addingPlayer=false;
		}
		if (this.addingGame) {
			this.resultsService.addGame(new Game(this.name, this.win));
			this.addingGame=false;
		}
	}
}