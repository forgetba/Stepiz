"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var tab_component_1 = require("./tab/tab.component");
var activity_component_1 = require("./activity/activity.component");
var profile_component_1 = require("./profile/profile.component");
var home_component_1 = require("./home/home.component");
var run_component_1 = require("./run/run.component");
var authguard_service_1 = require("./services/authguard.service");
var routes = [
    { path: "", redirectTo: "tab", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "tab", component: tab_component_1.TabComponent, canActivate: [authguard_service_1.AuthGuard], children: [
            { path: "run", component: run_component_1.RunComponent, outlet: "runTab" },
            { path: "home", component: home_component_1.HomeComponent, outlet: "homeTab" },
            { path: "profile", component: profile_component_1.ProfileComponent, outlet: "profileTab" },
            { path: "activity", component: activity_component_1.ActivityComponent, outlet: "activityTab" }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSwyREFBeUQ7QUFDekQscURBQW1EO0FBQ25ELG9FQUFrRTtBQUNsRSxpRUFBK0Q7QUFDL0Qsd0RBQXNEO0FBQ3RELHFEQUFtRDtBQUVuRCxrRUFBeUQ7QUFFekQsSUFBTSxNQUFNLEdBQVc7SUFFbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUNqRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDM0MsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRyw0QkFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUc7WUFFMUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSw0QkFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7WUFDMUQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUU7WUFDN0QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFO1lBQ3RFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRTtTQUM1RSxFQUFDO0NBQ0wsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gXCIuL3RhYi90YWIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpdml0eUNvbXBvbmVudCB9IGZyb20gXCIuL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSdW5Db21wb25lbnQgfSBmcm9tIFwiLi9ydW4vcnVuLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoZ3VhcmQuc2VydmljZVwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICBcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwidGFiXCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICB7IHBhdGg6IFwidGFiXCIsIGNvbXBvbmVudCA6IFRhYkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLCBjaGlsZHJlbiA6IFsgICBcblxuICAgICAgICB7IHBhdGg6IFwicnVuXCIsIGNvbXBvbmVudDogUnVuQ29tcG9uZW50LCBvdXRsZXQ6IFwicnVuVGFiXCIgfSxcbiAgICAgICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBvdXRsZXQ6IFwiaG9tZVRhYlwiIH0sXG4gICAgICAgIHsgcGF0aDogXCJwcm9maWxlXCIsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCwgb3V0bGV0OiBcInByb2ZpbGVUYWJcIiB9LFxuICAgICAgICB7IHBhdGg6IFwiYWN0aXZpdHlcIiwgY29tcG9uZW50OiBBY3Rpdml0eUNvbXBvbmVudCwgb3V0bGV0OiBcImFjdGl2aXR5VGFiXCIgfVxuICAgIF19XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHsgZW5hYmxlVHJhY2luZzogdHJ1ZSB9KV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==