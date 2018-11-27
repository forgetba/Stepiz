import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PlayersRoutingModule } from "./players-routing.module";
import { PlayersComponent } from "./players.component";

import { PlayersService } from "../services/players.service";
import { PlayersProfileComponent } from "./players-profile/players-profile.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PlayersRoutingModule
    ],
    declarations: [
        PlayersComponent,
        PlayersProfileComponent
    ],
    providers: [
        PlayersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PlayersModule { }