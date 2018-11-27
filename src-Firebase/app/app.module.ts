import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { ResultsComponent } from "./results/results.component";
import { PlayersService } from "./services/players.service";
import { ResultsService } from "./services/results.service";
import { FirestoreService } from "./services/firestore.service";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ResultsComponent
    ],
    providers: [
        ResultsService,
        PlayersService,
        FirestoreService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
