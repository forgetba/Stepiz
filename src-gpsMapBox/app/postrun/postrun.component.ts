import { Component, OnInit } from '@angular/core';
import { RunService } from '../services/run.service';

@Component({
	selector: 'postrun',
    moduleId: module.id,
	templateUrl: './postrun.component.html',
	styleUrls: ['./postrun.component.css']
})
// Component that displays the data of the run using the runService

export class PostrunComponent implements OnInit {

	distance: number;
	time: number;
	pace: number;
	speed: number;

	constructor(private runService: RunService) { 
		this.distance=this.runService.getDistance();
		this.time=this.runService.getTime();
		this.speed=this.runService.speed;
		this.pace=this.runService.pace;
	}

	ngOnInit() { }

	endActivity() : void {
		this.runService.reset();
	}
}