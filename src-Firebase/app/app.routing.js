"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home/home.component");
var results_component_1 = require("./results/results.component");
var routes = [
    { path: "", redirectTo: "/(playersTab:players//homeTab:home//resultsTab:results)", pathMatch: "full" },
    { path: "players", loadChildren: "~/app/players/players.module#PlayersModule", outlet: "playersTab" },
    { path: "home", component: home_component_1.HomeComponent, outlet: "homeTab" },
    { path: "results", component: results_component_1.ResultsComponent, outlet: "resultsTab" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFFdkUsd0RBQXNEO0FBQ3RELGlFQUErRDtBQUUvRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLHlEQUF5RCxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFFdEcsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO0lBQ3JHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRTtDQUN6RSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdWx0c0NvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi8ocGxheWVyc1RhYjpwbGF5ZXJzLy9ob21lVGFiOmhvbWUvL3Jlc3VsdHNUYWI6cmVzdWx0cylcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIFxuICAgIHsgcGF0aDogXCJwbGF5ZXJzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9wbGF5ZXJzL3BsYXllcnMubW9kdWxlI1BsYXllcnNNb2R1bGVcIiwgb3V0bGV0OiBcInBsYXllcnNUYWJcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgb3V0bGV0OiBcImhvbWVUYWJcIiB9LFxuICAgIHsgcGF0aDogXCJyZXN1bHRzXCIsIGNvbXBvbmVudDogUmVzdWx0c0NvbXBvbmVudCwgb3V0bGV0OiBcInJlc3VsdHNUYWJcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==