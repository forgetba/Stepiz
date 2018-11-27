"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Facebook = require("nativescript-facebook");
var navigation_service_1 = require("../services/navigation.service");
var appSettings = require("tns-core-modules/application-settings");
var userData_service_1 = require("../services/userData.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(ref, navigationService, userDataService) {
        this.ref = ref;
        this.navigationService = navigationService;
        this.userDataService = userDataService;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        Facebook.login(function (error, fbData) {
            if (error) {
                alert("Error during login: " + error.message);
            }
            else {
                console.log("login :" + fbData.token);
                appSettings.setString("access_token", fbData.token);
                _this.userDataService.updateUserInfo();
                _this.navigationService.go(['tab']);
            }
        });
        Facebook.requestReadPermissions(["user_friends"], function (error, fbData) {
            console.log(fbData);
            if (error) {
                console.log("autorisation refusée");
            }
            else {
                console.log("autorisation acceptée");
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "login",
            moduleId: module.id,
            templateUrl: "login.component.html",
            providers: [navigation_service_1.NavigationService, userData_service_1.UserDataService]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef, navigation_service_1.NavigationService, userData_service_1.UserDataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXFFO0FBQ3JFLGdEQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsbUVBQXFFO0FBQ3JFLGlFQUErRDtBQVMvRDtJQUVJLHdCQUFvQixHQUFzQixFQUFVLGlCQUFvQyxFQUFVLGVBQWlDO1FBQS9HLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtJQUNuSSxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUFBLGlCQW9CQztRQW5CRyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSyxFQUFFLE1BQU07WUFDekIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRDtpQkFBTTtnQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdEM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixJQUFJLEtBQUssRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ3hDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFXLENBQUM7SUEzQkgsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsc0NBQWlCLEVBQUUsa0NBQWUsQ0FBQztTQUNsRCxDQUFDO3lDQUcyQix3QkFBaUIsRUFBNkIsc0NBQWlCLEVBQTRCLGtDQUFlO09BRjFILGNBQWMsQ0E0QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBGYWNlYm9vayBmcm9tIFwibmF0aXZlc2NyaXB0LWZhY2Vib29rXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBVc2VyRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvdXNlckRhdGEuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImxvZ2luXCIsXG4gICAgbW9kdWxlSWQgOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwibG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtOYXZpZ2F0aW9uU2VydmljZSwgVXNlckRhdGFTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHsgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlLCBwcml2YXRlIHVzZXJEYXRhU2VydmljZSA6IFVzZXJEYXRhU2VydmljZSkge1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgICAgICBGYWNlYm9vay5sb2dpbigoZXJyb3IsIGZiRGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvciBkdXJpbmcgbG9naW46IFwiICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gOlwiICsgZmJEYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICBhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhY2Nlc3NfdG9rZW5cIiwgZmJEYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhU2VydmljZS51cGRhdGVVc2VySW5mbygpO1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UuZ28oWyd0YWInXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBGYWNlYm9vay5yZXF1ZXN0UmVhZFBlcm1pc3Npb25zKFtcInVzZXJfZnJpZW5kc1wiXSwgKGVycm9yLCBmYkRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZiRGF0YSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dG9yaXNhdGlvbiByZWZ1c8OpZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRvcmlzYXRpb24gYWNjZXB0w6llXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7fVxufSJdfQ==