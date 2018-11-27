import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
import { TabComponent } from "./tab/tab.component";
import { ActivityComponent } from "./activity/activity.component";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { RunComponent } from "./run/run.component";

import { AuthGuard } from "./services/authguard.service";

const routes: Routes = [
    
    { path: "", redirectTo: "tab", pathMatch: "full"},
    { path: "login", component: LoginComponent},
    //the tab access is protected by an authguard
    { path: "tab", component : TabComponent, canActivate: [AuthGuard], children : [   

        { path: "run", component: RunComponent, outlet: "runTab" },
        { path: "home", component: HomeComponent, outlet: "homeTab" },
        { path: "profile", component: ProfileComponent, outlet: "profileTab" },
        { path: "activity", component: ActivityComponent, outlet: "activityTab" }
    ]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
