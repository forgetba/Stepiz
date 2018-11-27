import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import * as application from 'application';
import { init, LoginBehavior } from "nativescript-facebook";


import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { NavigationService } from "./services/navigation.service";
import { TabComponent } from './tab/tab.component';
import { ActivityComponent } from "./activity/activity.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { RunComponent } from "./run/run.component";
import { UserDataService } from "./services/userData.service";
import { UserService } from "./services/user.service";
import { AuthGuard } from "./services/authguard.service";
import { firestore } from "nativescript-plugin-firebase";
import { FirestoreService } from "./services/firestore.service";

application.on(application.launchEvent, function (args) {
    init("1869433099800576", LoginBehavior.LoginBehaviorWeb);
});

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFacebookModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        TabComponent,
        RunComponent,
        HomeComponent,
        ActivityComponent,
        ProfileComponent
    ],
    providers: [
        NavigationService, 
        UserDataService, 
        UserService, 
        AuthGuard,
        FirestoreService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
}) 
export class AppModule { }
