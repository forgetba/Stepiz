"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = platform_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    AppComponent.prototype.ngOnInit = function () {
        // firebase.init({
        //     // Optionally pass in properties for database, authentication and cloud messaging,
        //     // see their respective docs.
        //   }).then(
        //     instance => {
        //       console.log("firebase.init done");
        //     },
        //     error => {
        //       console.log(`firebase.init error: ${error}`);
        //     }
        //   );
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-app",
            templateUrl: "app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXNEO0FBU3REO0lBQUE7SUFxQkEsQ0FBQztJQW5CRyxvQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUN0QixJQUFNLFVBQVUsR0FBRyxvQkFBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBRTVELE9BQU8sVUFBVSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUNJLGtCQUFrQjtRQUNsQix5RkFBeUY7UUFDekYsb0NBQW9DO1FBQ3BDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsMkNBQTJDO1FBQzNDLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsc0RBQXNEO1FBQ3RELFFBQVE7UUFDUixPQUFPO0lBQ1gsQ0FBQztJQXBCUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO09BQ1csWUFBWSxDQXFCeEI7SUFBRCxtQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0eyBcblxuICAgIGdldEljb25Tb3VyY2UoaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaWNvblByZWZpeCA9IGlzQW5kcm9pZCA/IFwicmVzOi8vXCIgOiBcInJlczovL3RhYkljb25zL1wiO1xuXG4gICAgICAgIHJldHVybiBpY29uUHJlZml4ICsgaWNvbjtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpeyBcbiAgICAgICAgLy8gZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgIC8vICAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgICAgIC8vICAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgICAgICAvLyAgIH0pLnRoZW4oXG4gICAgICAgIC8vICAgICBpbnN0YW5jZSA9PiB7XG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGVycm9yID0+IHtcbiAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgKTtcbiAgICB9XG59XG4iXX0=