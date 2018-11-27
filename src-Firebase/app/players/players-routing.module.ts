import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PlayersComponent } from "./players.component";
import { PlayersProfileComponent } from "./players-profile/players-profile.component";

const routes: Routes = [
    { path: "", children: [
        { path: "", component: PlayersComponent},
        { path: "players", component: PlayersComponent },
        { path: "players/:id", component: PlayersProfileComponent }
    ] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})

export class PlayersRoutingModule { }