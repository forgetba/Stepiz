"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var players_component_1 = require("./players.component");
var players_profile_component_1 = require("./players-profile/players-profile.component");
var routes = [
    { path: "", children: [
            { path: "", component: players_component_1.PlayersComponent },
            { path: "players", component: players_component_1.PlayersComponent },
            { path: "players/:id", component: players_profile_component_1.PlayersProfileComponent }
        ] }
];
var PlayersRoutingModule = /** @class */ (function () {
    function PlayersRoutingModule() {
    }
    PlayersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], PlayersRoutingModule);
    return PlayersRoutingModule;
}());
exports.PlayersRoutingModule = PlayersRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXllcnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLHlEQUF1RDtBQUN2RCx5RkFBc0Y7QUFFdEYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTtZQUNsQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFDO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxtREFBdUIsRUFBRTtTQUM5RCxFQUFFO0NBQ04sQ0FBQztBQU9GO0lBQUE7SUFBb0MsQ0FBQztJQUF4QixvQkFBb0I7UUFMaEMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FFVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUEsQUFBckMsSUFBcUM7QUFBeEIsb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFBsYXllcnNDb21wb25lbnQgfSBmcm9tIFwiLi9wbGF5ZXJzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJzUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3BsYXllcnMtcHJvZmlsZS9wbGF5ZXJzLXByb2ZpbGUuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHsgcGF0aDogXCJcIiwgY2hpbGRyZW46IFtcclxuICAgICAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogUGxheWVyc0NvbXBvbmVudH0sXHJcbiAgICAgICAgeyBwYXRoOiBcInBsYXllcnNcIiwgY29tcG9uZW50OiBQbGF5ZXJzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgeyBwYXRoOiBcInBsYXllcnMvOmlkXCIsIGNvbXBvbmVudDogUGxheWVyc1Byb2ZpbGVDb21wb25lbnQgfVxyXG4gICAgXSB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyc1JvdXRpbmdNb2R1bGUgeyB9Il19