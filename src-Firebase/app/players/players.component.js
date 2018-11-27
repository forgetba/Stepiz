"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var players_service_1 = require("../services/players.service");
var PlayersComponent = /** @class */ (function () {
    function PlayersComponent(playersService) {
        this.playersService = playersService;
        this.isLoading = true;
    }
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myPlayers$ = this.playersService.fetchPlayers();
        setTimeout(function () {
            _this.playersService.savePlayers(_this.myPlayers$);
        }, 100);
        this.playersService.getPlayers().then(function (players) {
            console.log("bang bang", players);
            _this.players = players;
        });
        this.isLoading = false;
    };
    PlayersComponent = __decorate([
        core_1.Component({
            selector: 'players',
            moduleId: module.id,
            templateUrl: './players.component.html',
            styleUrls: ['./players.component.css']
        }),
        __metadata("design:paramtypes", [players_service_1.PlayersService])
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCwrREFBNkQ7QUFVN0Q7SUFNQywwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSmxELGNBQVMsR0FBWSxJQUFJLENBQUM7SUFNMUIsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpBLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVyRCxVQUFVLENBQUM7WUFDVixLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQXZCVyxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7eUNBUW1DLGdDQUFjO09BTnRDLGdCQUFnQixDQXlCNUI7SUFBRCx1QkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL21vZGVscy9wbGF5ZXInO1xuaW1wb3J0IHsgUGxheWVyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wbGF5ZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3BsYXllcnMnLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXJzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGxheWVycy5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRpc0xvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXHRteVBsYXllcnMkOiBPYnNlcnZhYmxlPEFycmF5PFBsYXllcj4+O1xuXHRwbGF5ZXJzOiBBcnJheTxQbGF5ZXI+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGxheWVyc1NlcnZpY2U6IFBsYXllcnNTZXJ2aWNlKSB7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMubXlQbGF5ZXJzJCA9IHRoaXMucGxheWVyc1NlcnZpY2UuZmV0Y2hQbGF5ZXJzKCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMucGxheWVyc1NlcnZpY2Uuc2F2ZVBsYXllcnModGhpcy5teVBsYXllcnMkKTtcblx0XHR9LDEwMCk7XG5cblx0XHR0aGlzLnBsYXllcnNTZXJ2aWNlLmdldFBsYXllcnMoKS50aGVuKHBsYXllcnMgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJiYW5nIGJhbmdcIiwgcGxheWVycyk7XG5cdFx0XHR0aGlzLnBsYXllcnM9cGxheWVyczsgXG5cdFx0fSk7XG5cblx0XHR0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1x0XHRcblx0fVxuXHRcbn0iXX0=