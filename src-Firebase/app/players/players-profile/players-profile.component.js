"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var players_service_1 = require("~/app/services/players.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var PlayersProfileComponent = /** @class */ (function () {
    function PlayersProfileComponent(playersService, route, routerExtensions) {
        this.playersService = playersService;
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.isLoading = true;
    }
    PlayersProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params["id"];
        this.playersService.getPlayer(id).then(function (player) {
            _this.player = player;
            _this.isLoading = false;
        });
    };
    PlayersProfileComponent.prototype.onBackButtonTap = function () {
        this.routerExtensions.back();
    };
    PlayersProfileComponent = __decorate([
        core_1.Component({
            selector: 'players-profile',
            moduleId: module.id,
            templateUrl: './players-profile.component.html',
            styleUrls: ['./players-profile.component.css']
        }),
        __metadata("design:paramtypes", [players_service_1.PlayersService, router_1.ActivatedRoute, router_2.RouterExtensions])
    ], PlayersProfileComponent);
    return PlayersProfileComponent;
}());
exports.PlayersProfileComponent = PlayersProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy1wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYXllcnMtcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0VBQWdFO0FBQ2hFLDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFTL0Q7SUFLQyxpQ0FBb0IsY0FBOEIsRUFBVSxLQUFxQixFQUFVLGdCQUFrQztRQUF6RyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIN0gsY0FBUyxHQUFZLElBQUksQ0FBQztJQUkxQixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEEsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQUM7WUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBbEJRLHVCQUF1QjtRQVBuQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGlCQUFpQjtZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUM5QyxDQUFDO3lDQU9tQyxnQ0FBYyxFQUFpQix1QkFBYyxFQUE0Qix5QkFBZ0I7T0FMakgsdUJBQXVCLENBb0JuQztJQUFELDhCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJ34vYXBwL21vZGVscy9wbGF5ZXInO1xuaW1wb3J0IHsgUGxheWVyc1NlcnZpY2UgfSBmcm9tICd+L2FwcC9zZXJ2aWNlcy9wbGF5ZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BsYXllcnMtcHJvZmlsZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL3BsYXllcnMtcHJvZmlsZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BsYXllcnMtcHJvZmlsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJzUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcblx0cGxheWVyOiBQbGF5ZXI7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBwbGF5ZXJzU2VydmljZTogUGxheWVyc1NlcnZpY2UsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblx0fVxuXG5cdG5nT25Jbml0KCkgeyBcblx0XHRjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG5cdFx0dGhpcy5wbGF5ZXJzU2VydmljZS5nZXRQbGF5ZXIoaWQpLnRoZW4ocGxheWVyID0+IHtcblx0XHRcdHRoaXMucGxheWVyPXBsYXllcjtcblx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cdFx0fSk7XG5cdH1cblxuXHRvbkJhY2tCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxuXHRcbn0iXX0=