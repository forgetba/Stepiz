"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var application = require("application");
var nativescript_facebook_1 = require("nativescript-facebook");
var angular_1 = require("nativescript-facebook/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var navigation_service_1 = require("./services/navigation.service");
var tab_component_1 = require("./tab/tab.component");
var activity_component_1 = require("./activity/activity.component");
var profile_component_1 = require("./profile/profile.component");
var home_component_1 = require("./home/home.component");
var run_component_1 = require("./run/run.component");
var userData_service_1 = require("./services/userData.service");
var user_service_1 = require("./services/user.service");
var authguard_service_1 = require("./services/authguard.service");
var firestore_service_1 = require("./services/firestore.service");
application.on(application.launchEvent, function (args) {
    nativescript_facebook_1.init("1869433099800576", nativescript_facebook_1.LoginBehavior.LoginBehaviorWeb);
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptFacebookModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                tab_component_1.TabComponent,
                run_component_1.RunComponent,
                home_component_1.HomeComponent,
                activity_component_1.ActivityComponent,
                profile_component_1.ProfileComponent
            ],
            providers: [
                navigation_service_1.NavigationService,
                userData_service_1.UserDataService,
                user_service_1.UserService,
                authguard_service_1.AuthGuard,
                firestore_service_1.FirestoreService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHlDQUEyQztBQUMzQywrREFBNEQ7QUFHNUQseURBQTJFO0FBRTNFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsMkRBQXlEO0FBQ3pELG9FQUFrRTtBQUNsRSxxREFBbUQ7QUFDbkQsb0VBQWtFO0FBQ2xFLGlFQUErRDtBQUMvRCx3REFBc0Q7QUFDdEQscURBQW1EO0FBQ25ELGdFQUE4RDtBQUM5RCx3REFBc0Q7QUFDdEQsa0VBQXlEO0FBRXpELGtFQUFnRTtBQUVoRSxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxJQUFJO0lBQ2xELDRCQUFJLENBQUMsa0JBQWtCLEVBQUUscUNBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDO0FBK0JIO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUE3QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsb0NBQTBCO2dCQUMxQixxQ0FBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2Isc0NBQWlCO2dCQUNqQixvQ0FBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asc0NBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZiwwQkFBVztnQkFDWCw2QkFBUztnQkFDVCxvQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBpbml0LCBMb2dpbkJlaGF2aW9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYWNlYm9va1wiO1xuXG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZhY2Vib29rTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mYWNlYm9vay9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiL3RhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aXZpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUnVuQ29tcG9uZW50IH0gZnJvbSBcIi4vcnVuL3J1bi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJEYXRhU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3VzZXJEYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoZ3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcbmltcG9ydCB7IEZpcmVzdG9yZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9maXJlc3RvcmUuc2VydmljZVwiO1xuXG5hcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi5sYXVuY2hFdmVudCwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBpbml0KFwiMTg2OTQzMzA5OTgwMDU3NlwiLCBMb2dpbkJlaGF2aW9yLkxvZ2luQmVoYXZpb3JXZWIpO1xufSk7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZhY2Vib29rTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgVGFiQ29tcG9uZW50LFxuICAgICAgICBSdW5Db21wb25lbnQsXG4gICAgICAgIEhvbWVDb21wb25lbnQsXG4gICAgICAgIEFjdGl2aXR5Q29tcG9uZW50LFxuICAgICAgICBQcm9maWxlQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmF2aWdhdGlvblNlcnZpY2UsIFxuICAgICAgICBVc2VyRGF0YVNlcnZpY2UsIFxuICAgICAgICBVc2VyU2VydmljZSwgXG4gICAgICAgIEF1dGhHdWFyZCxcbiAgICAgICAgRmlyZXN0b3JlU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSkgXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19