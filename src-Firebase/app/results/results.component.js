"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var results_service_1 = require("../services/results.service");
var players_service_1 = require("../services/players.service");
var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(resultsService, playersService, page) {
        this.resultsService = resultsService;
        this.playersService = playersService;
        this.page = page;
        this.filters = ["name", "goals", "number"];
        this.isNumber = false;
        this.isGoals = false;
        this.page.actionBarHidden = true;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.myGames$ = this.resultsService.fetchGames();
        this.sortedPlayers$ = this.playersService.fetchPlayers("name");
    };
    ResultsComponent.prototype.selectedIndexChanged = function (args) {
        var _this = this;
        var picker = args.object;
        this.sortedPlayers$ = this.playersService.fetchPlayers(this.filters[picker.selectedIndex]);
        setTimeout(function () {
            if (picker.selectedIndex == 0) {
                _this.isNumber = false;
                _this.isGoals = false;
            }
            else if (picker.selectedIndex == 1) {
                _this.isNumber = false;
                _this.isGoals = true;
            }
            else {
                _this.isNumber = true;
                _this.isGoals = false;
            }
        }, 100);
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'results',
            moduleId: module.id,
            templateUrl: './results.component.html',
            styleUrls: ['./results.component.css']
        }),
        __metadata("design:paramtypes", [results_service_1.ResultsService, players_service_1.PlayersService, page_1.Page])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUdsRCxzREFBcUQ7QUFFckQsK0RBQTZEO0FBQzdELCtEQUE2RDtBQVc3RDtJQVFDLDBCQUFvQixjQUE4QixFQUFVLGNBQThCLEVBQVUsSUFBVTtRQUExRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTjlHLFlBQU8sR0FBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBS3hCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSwrQ0FBb0IsR0FBM0IsVUFBNEIsSUFBSTtRQUFoQyxpQkFnQkk7UUFmRyxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUV6RixVQUFVLENBQUM7WUFDVixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxLQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztnQkFDbkIsS0FBSSxDQUFDLE9BQU8sR0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztRQUNGLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztJQUNMLENBQUM7SUFqQ1EsZ0JBQWdCO1FBUDVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztTQUN0QyxDQUFDO3lDQVVtQyxnQ0FBYyxFQUEwQixnQ0FBYyxFQUFnQixXQUFJO09BUmxHLGdCQUFnQixDQW1DNUI7SUFBRCx1QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcblxuaW1wb3J0IHsgUmVzdWx0c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yZXN1bHRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxheWVyc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wbGF5ZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4uL21vZGVscy9nYW1lJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL21vZGVscy9wbGF5ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdyZXN1bHRzJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJy4vcmVzdWx0cy5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3Jlc3VsdHMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0ZmlsdGVyczogc3RyaW5nW10gPSBbXCJuYW1lXCIsIFwiZ29hbHNcIiwgXCJudW1iZXJcIl07XG5cdGlzTnVtYmVyIDogYm9vbGVhbj0gZmFsc2U7IFxuXHRpc0dvYWxzIDogYm9vbGVhbj0gZmFsc2U7XG5cdG15R2FtZXMkOiBPYnNlcnZhYmxlPEFycmF5PEdhbWU+Pjtcblx0c29ydGVkUGxheWVycyQ6IE9ic2VydmFibGU8QXJyYXk8UGxheWVyPj47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZXN1bHRzU2VydmljZTogUmVzdWx0c1NlcnZpY2UsIHByaXZhdGUgcGxheWVyc1NlcnZpY2U6IFBsYXllcnNTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuPXRydWU7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm15R2FtZXMkPXRoaXMucmVzdWx0c1NlcnZpY2UuZmV0Y2hHYW1lcygpO1xuXHRcdHRoaXMuc29ydGVkUGxheWVycyQ9dGhpcy5wbGF5ZXJzU2VydmljZS5mZXRjaFBsYXllcnMoXCJuYW1lXCIpO1xuXHR9XG5cblx0cHVibGljIHNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgbGV0IHBpY2tlciA9IDxMaXN0UGlja2VyPmFyZ3Mub2JqZWN0O1xuXHRcdHRoaXMuc29ydGVkUGxheWVycyQ9dGhpcy5wbGF5ZXJzU2VydmljZS5mZXRjaFBsYXllcnModGhpcy5maWx0ZXJzW3BpY2tlci5zZWxlY3RlZEluZGV4XSk7XG5cdFx0XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAocGlja2VyLnNlbGVjdGVkSW5kZXg9PTApIHtcblx0XHRcdFx0dGhpcy5pc051bWJlcj1mYWxzZTtcblx0XHRcdFx0dGhpcy5pc0dvYWxzPWZhbHNlO1xuXHRcdFx0fSBlbHNlIGlmIChwaWNrZXIuc2VsZWN0ZWRJbmRleD09MSkge1xuXHRcdFx0XHR0aGlzLmlzTnVtYmVyPWZhbHNlO1xuXHRcdFx0XHR0aGlzLmlzR29hbHM9dHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaXNOdW1iZXI9dHJ1ZTtcblx0XHRcdFx0dGhpcy5pc0dvYWxzPWZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sMTAwKTtcbiAgICB9XG5cbn0iXX0=