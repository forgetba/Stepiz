"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firestore_service_1 = require("./firestore.service");
var ResultsService = /** @class */ (function () {
    function ResultsService(firestoreService) {
        this.firestoreService = firestoreService;
    }
    ResultsService.prototype.setAllGames = function (games) {
        this.games = games;
    };
    ResultsService.prototype.getAllGames = function () {
        this.retrieveGames();
        return this.games;
    };
    ResultsService.prototype.retrieveGames = function () {
        var _this = this;
        this.firestoreService.queryCollection("games").then(function (gameslist) {
            _this.setAllGames(gameslist);
        });
    };
    ResultsService.prototype.fetchGames = function () {
        return this.firestoreService.fetchCollection("games");
    };
    ResultsService.prototype.addGame = function (game) {
        this.firestoreService.addDocToCollection("games", game);
        this.retrieveGames();
    };
    ResultsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_service_1.FirestoreService])
    ], ResultsService);
    return ResultsService;
}());
exports.ResultsService = ResultsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzdWx0cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHlEQUF1RDtBQUl2RDtJQUlJLHdCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDO0lBRU8sb0NBQVcsR0FBbkIsVUFBb0IsS0FBa0I7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLG9DQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTyxzQ0FBYSxHQUFyQjtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxTQUFTO1lBQ3pELEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sbUNBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLElBQVU7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTdCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBSzZCLG9DQUFnQjtPQUo3QyxjQUFjLENBK0IxQjtJQUFELHFCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IEZpcmVzdG9yZVNlcnZpY2UgfSBmcm9tIFwiLi9maXJlc3RvcmUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4uL21vZGVscy9nYW1lXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRzU2VydmljZSB7XHJcblxyXG4gICAgZ2FtZXM6IEFycmF5PEdhbWU+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZXN0b3JlU2VydmljZTogRmlyZXN0b3JlU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0QWxsR2FtZXMoZ2FtZXM6IEFycmF5PEdhbWU+KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nYW1lcz1nYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QWxsR2FtZXMoKTogQXJyYXk8R2FtZT4ge1xyXG4gICAgICAgIHRoaXMucmV0cmlldmVHYW1lcygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmV0cmlldmVHYW1lcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpcmVzdG9yZVNlcnZpY2UucXVlcnlDb2xsZWN0aW9uKFwiZ2FtZXNcIikudGhlbihnYW1lc2xpc3QgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFsbEdhbWVzKGdhbWVzbGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBmZXRjaEdhbWVzKCk6IE9ic2VydmFibGU8QXJyYXk8R2FtZT4+e1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZVNlcnZpY2UuZmV0Y2hDb2xsZWN0aW9uKFwiZ2FtZXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEdhbWUoZ2FtZTogR2FtZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmlyZXN0b3JlU2VydmljZS5hZGREb2NUb0NvbGxlY3Rpb24oXCJnYW1lc1wiLCBnYW1lKTtcclxuICAgICAgICB0aGlzLnJldHJpZXZlR2FtZXMoKTtcclxuICAgIH1cclxuXHJcbn0iXX0=