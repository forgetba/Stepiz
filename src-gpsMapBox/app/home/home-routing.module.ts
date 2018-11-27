import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { PostrunComponent } from "../postrun/postrun.component";

const routes: Routes = [
    { path: "", children: [
        { path: "", component: HomeComponent},
        { path: "home", component: HomeComponent },
        { path: "home/postrun", component: PostrunComponent }
    ] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
