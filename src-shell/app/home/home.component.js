"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var navigation_service_1 = require("../services/navigation.service");
var appSettings = require("tns-core-modules/application-settings");
var nativescript_facebook_1 = require("nativescript-facebook");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(navigationService) {
        this.navigationService = navigationService;
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onLogout = function () {
        var _this = this;
        nativescript_facebook_1.logout(function () {
            console.log("logged out");
            appSettings.clear();
            _this.navigationService.go(['login']);
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [navigation_service_1.NavigationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsbUVBQXFFO0FBQ3JFLCtEQUEyRDtBQU8zRDtJQUVJLHVCQUFvQixpQkFBcUM7UUFBckMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUNyRCxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLDhCQUFRLENBQUM7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFoQlEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FHMEMsc0NBQWlCO09BRmhELGFBQWEsQ0FpQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL25hdmlnYXRpb24uc2VydmljZVwiO1xuaW1wb3J0ICogYXMgYXBwU2V0dGluZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IGxvZ291dCBhcyBmYkxvZ291dCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFjZWJvb2tcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdmlnYXRpb25TZXJ2aWNlIDogTmF2aWdhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25Mb2dvdXQoKSB7XG4gICAgICAgIGZiTG9nb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9nZ2VkIG91dFwiKTtcbiAgICAgICAgICAgIGFwcFNldHRpbmdzLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdvKFsnbG9naW4nXSk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19