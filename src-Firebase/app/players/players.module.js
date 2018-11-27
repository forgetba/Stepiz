"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var players_routing_module_1 = require("./players-routing.module");
var players_component_1 = require("./players.component");
var players_service_1 = require("../services/players.service");
var players_profile_component_1 = require("./players-profile/players-profile.component");
var PlayersModule = /** @class */ (function () {
    function PlayersModule() {
    }
    PlayersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                players_routing_module_1.PlayersRoutingModule
            ],
            declarations: [
                players_component_1.PlayersComponent,
                players_profile_component_1.PlayersProfileComponent
            ],
            providers: [
                players_service_1.PlayersService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], PlayersModule);
    return PlayersModule;
}());
exports.PlayersModule = PlayersModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQUV2RCwrREFBNkQ7QUFDN0QseUZBQXNGO0FBa0J0RjtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQWhCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2FBQ3ZCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjtnQkFDaEIsbURBQXVCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXJzUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3BsYXllcnMtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgUGxheWVyc0NvbXBvbmVudCB9IGZyb20gXCIuL3BsYXllcnMuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXJzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGF5ZXJzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxheWVyc1Byb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wbGF5ZXJzLXByb2ZpbGUvcGxheWVycy1wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUGxheWVyc1JvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQbGF5ZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIFBsYXllcnNQcm9maWxlQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUGxheWVyc1NlcnZpY2VcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxheWVyc01vZHVsZSB7IH0iXX0=