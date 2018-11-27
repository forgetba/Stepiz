"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var players_service_1 = require("../services/players.service");
var results_service_1 = require("../services/results.service");
var player_1 = require("../models/player");
var game_1 = require("../models/game");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(playersService, resultsService) {
        this.playersService = playersService;
        this.resultsService = resultsService;
        this.addingPlayer = false;
        this.addingGame = false;
        setTimeout(function () { }, 2000);
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onPlayerAdd = function () {
        this.name = "";
        this.nb = null;
        this.goals = null;
        this.addingPlayer = true;
        this.addingGame = false;
    };
    HomeComponent.prototype.onGameAdd = function () {
        this.name = "";
        this.nb = null;
        this.goals = null;
        this.addingGame = true;
        this.addingPlayer = false;
    };
    HomeComponent.prototype.onChecked = function (args) {
        var firstSwitch = args.object;
        if (firstSwitch.checked) {
            this.win = true;
        }
        else {
            this.win = false;
        }
    };
    HomeComponent.prototype.onSubmit = function () {
        if (this.addingPlayer) {
            this.playersService.addPlayer(new player_1.Player(this.name, +this.nb, +this.goals));
            this.addingPlayer = false;
        }
        if (this.addingGame) {
            this.resultsService.addGame(new game_1.Game(this.name, this.win));
            this.addingGame = false;
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [players_service_1.PlayersService, results_service_1.ResultsService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNkQ7QUFDN0QsK0RBQTZEO0FBQzdELDJDQUEwQztBQUMxQyx1Q0FBc0M7QUFVdEM7SUFVQyx1QkFBb0IsY0FBOEIsRUFBVSxjQUE4QjtRQUF0RSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSMUYsaUJBQVksR0FBVSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFVLEtBQUssQ0FBQztRQVF6QixVQUFVLENBQUMsY0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELGdDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsbUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFDLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFDLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNkLElBQUksV0FBVyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFSixnQ0FBUSxHQUFSO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsWUFBWSxHQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFDLEtBQUssQ0FBQztRQUN2QixDQUFDO0lBQ0YsQ0FBQztJQWxEVyxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ25DLENBQUM7eUNBWW1DLGdDQUFjLEVBQTBCLGdDQUFjO09BVjlFLGFBQWEsQ0FtRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXJzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BsYXllcnMuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN1bHRzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Jlc3VsdHMuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9tb2RlbHMvcGxheWVyJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuLi9tb2RlbHMvZ2FtZSc7XG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaC9zd2l0Y2gnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdob21lJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG5cdGFkZGluZ1BsYXllcjogYm9vbGVhbj1mYWxzZTtcblx0YWRkaW5nR2FtZTogYm9vbGVhbj1mYWxzZTtcblx0cGxheWVyOiBQbGF5ZXI7XG5cdG5hbWU6IHN0cmluZztcblx0bmI6IG51bWJlcjtcblx0Z29hbHM6IG51bWJlcjtcblx0d2luOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcGxheWVyc1NlcnZpY2U6IFBsYXllcnNTZXJ2aWNlLCBwcml2YXRlIHJlc3VsdHNTZXJ2aWNlOiBSZXN1bHRzU2VydmljZSkgeyBcblx0XHRzZXRUaW1lb3V0KCgpID0+IHt9LCAyMDAwKVxuXHR9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHRvblBsYXllckFkZCgpIDogdm9pZCB7XG5cdFx0dGhpcy5uYW1lPVwiXCI7XG5cdFx0dGhpcy5uYj1udWxsO1xuXHRcdHRoaXMuZ29hbHM9bnVsbDtcblx0XHR0aGlzLmFkZGluZ1BsYXllcj10cnVlO1xuXHRcdHRoaXMuYWRkaW5nR2FtZT1mYWxzZTtcblx0fVxuXG5cdG9uR2FtZUFkZCgpIDogdm9pZCB7XG5cdFx0dGhpcy5uYW1lPVwiXCI7XG5cdFx0dGhpcy5uYj1udWxsO1xuXHRcdHRoaXMuZ29hbHM9bnVsbDtcblx0XHR0aGlzLmFkZGluZ0dhbWU9dHJ1ZTtcblx0XHR0aGlzLmFkZGluZ1BsYXllcj1mYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBvbkNoZWNrZWQoYXJncykge1xuICAgICAgICBsZXQgZmlyc3RTd2l0Y2ggPSA8U3dpdGNoPmFyZ3Mub2JqZWN0O1xuICAgICAgICBpZiAoZmlyc3RTd2l0Y2guY2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy53aW4gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy53aW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuXHRvblN1Ym1pdCgpIDogdm9pZCB7XG5cdFx0aWYgKHRoaXMuYWRkaW5nUGxheWVyKSB7XG5cdFx0XHR0aGlzLnBsYXllcnNTZXJ2aWNlLmFkZFBsYXllcihuZXcgUGxheWVyKHRoaXMubmFtZSwgK3RoaXMubmIsICt0aGlzLmdvYWxzKSk7XG5cdFx0XHR0aGlzLmFkZGluZ1BsYXllcj1mYWxzZTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuYWRkaW5nR2FtZSkge1xuXHRcdFx0dGhpcy5yZXN1bHRzU2VydmljZS5hZGRHYW1lKG5ldyBHYW1lKHRoaXMubmFtZSwgdGhpcy53aW4pKTtcblx0XHRcdHRoaXMuYWRkaW5nR2FtZT1mYWxzZTtcblx0XHR9XG5cdH1cbn0iXX0=