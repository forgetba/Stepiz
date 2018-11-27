import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../services/navigation.service";
import * as appSettings from "tns-core-modules/application-settings";
import { logout as fbLogout } from "nativescript-facebook";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private navigationService : NavigationService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onLogout() {
        fbLogout(() => {
            console.log("logged out");
            appSettings.clear();
            this.navigationService.go(['login']);
        })
    }
}
