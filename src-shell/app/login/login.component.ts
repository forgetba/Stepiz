import { Component, ChangeDetectorRef, OnInit } from "@angular/core";
import * as Facebook from "nativescript-facebook";
import { NavigationService } from "../services/navigation.service";
import * as appSettings from "tns-core-modules/application-settings";
import { UserDataService } from "../services/userData.service";


@Component({
    selector: "login",
    moduleId : module.id,
    templateUrl: "login.component.html",
    providers: [NavigationService, UserDataService]
})
export class LoginComponent implements OnInit{ 

    constructor(private ref: ChangeDetectorRef, private navigationService: NavigationService, private userDataService : UserDataService) {
    }

    login() {
        Facebook.login((error, fbData) => {
            if (error) {
                alert("Error during login: " + error.message);
            } else {
                console.log("login : " + fbData.token);
                //we save the token here
                appSettings.setString("access_token", fbData.token);
                this.userDataService.updateUserInfo();
                this.navigationService.go(['tab']);
            }
        });
        Facebook.requestReadPermissions(["user_friends"], (error, fbData) => {
            console.log(fbData);
            if (error) {
                console.log("Authorization declined");
            } else {
                console.log("Authorization accepted");
            }
            
        });
    }

    ngOnInit(){}
}