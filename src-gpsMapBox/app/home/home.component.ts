import { Component, OnInit } from '@angular/core';
import { Accuracy } from "ui/enums";
import { registerElement } from "nativescript-angular/element-registry";
import { MapboxViewApi, Viewport as MapboxViewport } from "nativescript-mapbox";
import * as geolocation from "nativescript-geolocation";
import { RunService } from '../services/run.service';

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@Component({
	selector: 'home',
    moduleId: module.id,
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    private map: MapboxViewApi;
    listener;
    following: boolean = false;
    previousLoc: geolocation.Location;
    currentLoc: geolocation.Location;
    id: number;
    distance: number =0;
    seconds: number =0;

	constructor(private runService: RunService) {
	}

	ngOnInit() { }

    // enables to get all the data of the map such as its settings if you want to modify it later
	onMapReady(args): void {
		this.map=args.map;
	}

    // enables to start following the user
	toggleFollowing(): void {
		this.following = !(this.following);

        // this method does all the work for you
		this.map.trackUser({
    		mode: this.following ? "FOLLOW" : "NONE",
    		animated: false
		});

		this.map.setZoomLevel({
			level: 18,
			animated: true
		});
    }

    private getDeviceLocation(): Promise<any> {
        return new Promise((resolve, reject) => {
            geolocation.getCurrentLocation({timeout: 10000}).then(location => {
                resolve(location);
            }).catch(error => {
                reject(error);
            });
        });
    }

    startMonitor(): void {
        this.distance=0;
        this.seconds=0;
        this.map.removePolylines();
        // the method setInterval enables the repeat of a sample of the code at the desired rate (each 1000 ms here)
        this.id = setInterval(() => {
            this.getDeviceLocation().then(result => {
                this.previousLoc=this.currentLoc;
                this.currentLoc=result;
                this.updateDistance(this.previousLoc, this.currentLoc);
                this.seconds++;
                this.map.addPolyline({
                    color: '#f28610', width: 3, opacity: 0.6,
                    points: [
                        { // the first point
                            'lat': this.previousLoc.latitude,
                            'lng': this.previousLoc.longitude
                        },
                        { // the second point
                            'lat': this.currentLoc.latitude,
                            'lng': this.currentLoc.longitude
                        }
                    ]
                });
            },error => {
                console.error(error);
            });
        }, 1000); // 1000 = 1000ms

    }

    stopMonitor(): void {
        geolocation.clearWatch(this.listener);
        clearInterval(this.id); // to stop the interval
        // Save useful data to retrieve it later in the postrun component
        this.runService.setDistance(this.distance);
        this.runService.setTime(this.seconds);
        this.runService.setSpeed((this.distance/this.seconds)*3.6);
        this.runService.setPace(this.seconds/60*this.distance);
    }

    updateDistance(loc1: geolocation.Location, loc2: geolocation.Location): void {
        this.distance+=geolocation.distance(loc1,loc2);
    }

}