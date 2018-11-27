import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ResultsComponent } from "./results/results.component";

const routes: Routes = [
    { path: "", redirectTo: "/(playersTab:players//homeTab:home//resultsTab:results)", pathMatch: "full" },
    
    { path: "players", loadChildren: "~/app/players/players.module#PlayersModule", outlet: "playersTab" },
    { path: "home", component: HomeComponent, outlet: "homeTab" },
    { path: "results", component: ResultsComponent, outlet: "resultsTab" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }