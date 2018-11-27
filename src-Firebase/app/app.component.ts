import { Component, OnInit } from "@angular/core";
import firebase = require('nativescript-plugin-firebase');

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit { 

    constructor() {
    }

    ngOnInit(): void {
        firebase.init({persist: false})
        .then(() => console.log(">>>>> Firebase initialized"))
        .catch(err => console.log(">>>>> Firebase init error: " + err));
    }

}
