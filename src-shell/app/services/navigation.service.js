"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var NavigationService = /** @class */ (function () {
    function NavigationService(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    NavigationService.prototype.go = function (route, name) {
        this
            .routerExtensions
            .navigate(route, {
            clearHistory: true,
            animated: true,
            transition: {
                name: name ? name : "slide",
                duration: 200,
                curve: "linear"
            }
        });
    };
    NavigationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], NavigationService);
    return NavigationService;
}());
exports.NavigationService = NavigationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2aWdhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNEQUErRDtBQUcvRDtJQUVJLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QsOEJBQUUsR0FBRixVQUFHLEtBQW9CLEVBQUUsSUFBYTtRQUVsQyxJQUFJO2FBQ0MsZ0JBQWdCO2FBQ2hCLFFBQVEsQ0FBQyxLQUFLLEVBQUU7WUFDYixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQzNCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQWxCUSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FHNkIseUJBQWdCO09BRjdDLGlCQUFpQixDQW1CN0I7SUFBRCx3QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XHJcblxyXG4gICAgZ28ocm91dGU6IEFycmF5PHN0cmluZz4sIG5hbWU/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAucm91dGVyRXh0ZW5zaW9uc1xyXG4gICAgICAgICAgICAubmF2aWdhdGUocm91dGUsIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgPyBuYW1lIDogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59Il19