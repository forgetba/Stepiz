import { Component, OnInit } from '@angular/core';
import { ListPicker } from "tns-core-modules/ui/list-picker";
import { Observable } from "rxjs";
import { Page } from 'tns-core-modules/ui/page/page';

import { ResultsService } from '../services/results.service';
import { PlayersService } from '../services/players.service';
import { Game } from '../models/game';
import { Player } from '../models/player';

@Component({
	selector: 'results',
    moduleId: module.id,
	templateUrl: './results.component.html',
	styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnInit {

	filters: string[] = ["name", "goals", "number"];
	isNumber : boolean= false; 
	isGoals : boolean= false;
	myGames$: Observable<Array<Game>>;
	sortedPlayers$: Observable<Array<Player>>;

	constructor(private resultsService: ResultsService, private playersService: PlayersService, private page: Page) {
		this.page.actionBarHidden=true;
	}

	ngOnInit() {
		this.myGames$=this.resultsService.fetchGames();
		this.sortedPlayers$=this.playersService.fetchPlayers("name");
	}

	public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
		this.sortedPlayers$=this.playersService.fetchPlayers(this.filters[picker.selectedIndex]);
		
		setTimeout(() => {
			if (picker.selectedIndex==0) {
				this.isNumber=false;
				this.isGoals=false;
			} else if (picker.selectedIndex==1) {
				this.isNumber=false;
				this.isGoals=true;
			} else {
				this.isNumber=true;
				this.isGoals=false;
			}
		},100);
    }

}