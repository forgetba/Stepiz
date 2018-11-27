"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var navigation_service_1 = require("./navigation.service");
var appSettings = require("tns-core-modules/application-settings");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(_routerExtensions, navigationService) {
        this._routerExtensions = _routerExtensions;
        this.navigationService = navigationService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('ptdr');
        console.log(appSettings.getString("access_token"));
        if (!appSettings.getString("access_token")) {
            console.log("mdr");
            this.navigationService.go(["login"]);
        }
        console.log('xptdr');
        return true;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions, navigation_service_1.NavigationService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoZ3VhcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyxzREFBK0Q7QUFFL0QsMkRBQXlEO0FBRXpELG1FQUFxRTtBQUlyRTtJQUVJLG1CQUFvQixpQkFBbUMsRUFBVSxpQkFBcUM7UUFBbEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7SUFBSSxDQUFDO0lBRTNHLCtCQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFiUSxTQUFTO1FBRHJCLGlCQUFVLEVBQUU7eUNBRzhCLHlCQUFnQixFQUE4QixzQ0FBaUI7T0FGN0YsU0FBUyxDQWNyQjtJQUFELGdCQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRBY2Nlc3NUb2tlbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFjZWJvb2tcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9uYXZpZ2F0aW9uLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbmF2aWdhdGlvblNlcnZpY2UgOiBOYXZpZ2F0aW9uU2VydmljZSkgeyB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3B0ZHInKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhY2Nlc3NfdG9rZW5cIikpO1xyXG4gICAgICAgIGlmICghYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiYWNjZXNzX3Rva2VuXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWRyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmdvKFtcImxvZ2luXCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3hwdGRyJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iXX0=