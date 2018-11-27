import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { getCurrentAccessToken } from "nativescript-facebook";
import { NavigationService } from "./navigation.service";

import * as appSettings from "tns-core-modules/application-settings";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _routerExtensions: RouterExtensions, private navigationService : NavigationService) { }

    canActivate(): boolean {
        console.log(appSettings.getString("access_token"));
        //if the String of appSetting is empty
        if (!appSettings.getString("access_token")) {
            this.navigationService.go(["login"]);
        }
        return true;
    }
}