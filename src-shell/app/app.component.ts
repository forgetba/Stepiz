import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import firebase = require("nativescript-plugin-firebase");


@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit{ 

    getIconSource(icon: string): string {
        const iconPrefix = isAndroid ? "res://" : "res://tabIcons/";

        return iconPrefix + icon;
    }

    ngOnInit(){ 
        // firebase.init({
        //     // Optionally pass in properties for database, authentication and cloud messaging,
        //     // see their respective docs.
        //   }).then(
        //     instance => {
        //       console.log("firebase.init done");
        //     },
        //     error => {
        //       console.log(`firebase.init error: ${error}`);
        //     }
        //   );
    }
}
