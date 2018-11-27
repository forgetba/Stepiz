"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firestore_service_1 = require("./firestore.service");
var PlayersService = /** @class */ (function () {
    function PlayersService(firestoreService, ngZone) {
        this.firestoreService = firestoreService;
        this.ngZone = ngZone;
    }
    // Saved players
    PlayersService.prototype.savePlayers = function (players) {
        this.savedPlayers = players;
    };
    // Setters
    PlayersService.prototype.setPlayers = function () {
        var _this = this;
        this.firestoreService.queryCollection("players").then(function (playerslist) {
            _this.players = playerslist;
        });
    };
    PlayersService.prototype.setPlayer = function (id) {
        var _this = this;
        this.firestoreService.queryDoc("players", id).then(function (player) {
            _this.player = player;
        });
    };
    // Promises asynchrones
    PlayersService.prototype.getPlayers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var players;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestoreService.queryCollection("players")];
                    case 1:
                        players = _a.sent();
                        return [2 /*return*/, players];
                }
            });
        });
    };
    PlayersService.prototype.getPlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.firestoreService.queryDoc("players", id)];
                    case 1:
                        player = _a.sent();
                        return [2 /*return*/, player];
                }
            });
        });
    };
    // Observables
    PlayersService.prototype.fetchPlayer = function (id) {
        return this.firestoreService.fetchDoc("players", id);
    };
    PlayersService.prototype.fetchPlayers = function (cond) {
        console.log(cond);
        if (this.savedPlayers == undefined) {
            return this.firestoreService.fetchCollection("players", cond);
        }
        else {
            return this.savedPlayers;
        }
    };
    // Add document
    PlayersService.prototype.addPlayer = function (player) {
        this.firestoreService.addDocToCollection("players", player);
        this.setPlayers();
    };
    PlayersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_service_1.FirestoreService, core_1.NgZone])
    ], PlayersService);
    return PlayersService;
}());
exports.PlayersService = PlayersService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxheWVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBR25ELHlEQUF1RDtBQUd2RDtJQU1JLHdCQUFvQixnQkFBa0MsRUFBVSxNQUFjO1FBQTFELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQzlFLENBQUM7SUFHRCxnQkFBZ0I7SUFDVCxvQ0FBVyxHQUFsQixVQUFtQixPQUFrQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFDLE9BQU8sQ0FBQztJQUM5QixDQUFDO0lBRUQsVUFBVTtJQUNILG1DQUFVLEdBQWpCO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7WUFDN0QsS0FBSSxDQUFDLE9BQU8sR0FBQyxXQUFXLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sa0NBQVMsR0FBaEIsVUFBaUIsRUFBVTtRQUEzQixpQkFJQztRQUhHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDckQsS0FBSSxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsdUJBQXVCO0lBQ1YsbUNBQVUsR0FBdkI7Ozs7OzRCQUNvQixxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFBOzt3QkFBaEUsT0FBTyxHQUFHLFNBQXNEO3dCQUN0RSxzQkFBTyxPQUFPLEVBQUM7Ozs7S0FDbEI7SUFFWSxrQ0FBUyxHQUF0QixVQUF1QixFQUFVOzs7Ozs0QkFDZCxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxFQUFFLENBQUMsRUFBQTs7d0JBQTNELE1BQU0sR0FBRyxTQUFrRDt3QkFDakUsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCO0lBRUQsY0FBYztJQUNQLG9DQUFXLEdBQWxCLFVBQW1CLEVBQVU7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxxQ0FBWSxHQUFuQixVQUFvQixJQUFhO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO0lBRUwsQ0FBQztJQUVELGVBQWU7SUFDUixrQ0FBUyxHQUFoQixVQUFpQixNQUFjO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUExRFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQU82QixvQ0FBZ0IsRUFBa0IsYUFBTTtPQU5yRSxjQUFjLENBNEQxQjtJQUFELHFCQUFDO0NBQUEsQUE1REQsSUE0REM7QUE1RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3BsYXllclwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgRmlyZXN0b3JlU2VydmljZSB9IGZyb20gXCIuL2ZpcmVzdG9yZS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJzU2VydmljZSB7XHJcblxyXG4gICAgc2F2ZWRQbGF5ZXJzOiBPYnNlcnZhYmxlPEFycmF5PFBsYXllcj4+O1xyXG4gICAgcGxheWVyczogQXJyYXk8UGxheWVyPjtcclxuICAgIHBsYXllcjogUGxheWVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZXN0b3JlU2VydmljZTogRmlyZXN0b3JlU2VydmljZSwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBTYXZlZCBwbGF5ZXJzXHJcbiAgICBwdWJsaWMgc2F2ZVBsYXllcnMocGxheWVyczogT2JzZXJ2YWJsZTxBcnJheTxQbGF5ZXI+Pik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2F2ZWRQbGF5ZXJzPXBsYXllcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGVyc1xyXG4gICAgcHVibGljIHNldFBsYXllcnMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLnF1ZXJ5Q29sbGVjdGlvbihcInBsYXllcnNcIikudGhlbihwbGF5ZXJzbGlzdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycz1wbGF5ZXJzbGlzdDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGxheWVyKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpcmVzdG9yZVNlcnZpY2UucXVlcnlEb2MoXCJwbGF5ZXJzXCIsIGlkKS50aGVuKHBsYXllciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyPXBsYXllcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcm9taXNlcyBhc3luY2hyb25lc1xyXG4gICAgcHVibGljIGFzeW5jIGdldFBsYXllcnMoKTogUHJvbWlzZTxBcnJheTxQbGF5ZXI+PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVycyA9IGF3YWl0IHRoaXMuZmlyZXN0b3JlU2VydmljZS5xdWVyeUNvbGxlY3Rpb24oXCJwbGF5ZXJzXCIpO1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRQbGF5ZXIoaWQ6IHN0cmluZyk6IFByb21pc2U8UGxheWVyPiB7IFxyXG4gICAgICAgIGNvbnN0IHBsYXllciA9IGF3YWl0IHRoaXMuZmlyZXN0b3JlU2VydmljZS5xdWVyeURvYyhcInBsYXllcnNcIixpZCk7XHJcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPYnNlcnZhYmxlc1xyXG4gICAgcHVibGljIGZldGNoUGxheWVyKGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBsYXllcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZVNlcnZpY2UuZmV0Y2hEb2MoXCJwbGF5ZXJzXCIsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmV0Y2hQbGF5ZXJzKGNvbmQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFycmF5PFBsYXllcj4+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb25kKTtcclxuICAgICAgICBpZiAodGhpcy5zYXZlZFBsYXllcnM9PXVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maXJlc3RvcmVTZXJ2aWNlLmZldGNoQ29sbGVjdGlvbihcInBsYXllcnNcIiwgY29uZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2F2ZWRQbGF5ZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgZG9jdW1lbnRcclxuICAgIHB1YmxpYyBhZGRQbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpcmVzdG9yZVNlcnZpY2UuYWRkRG9jVG9Db2xsZWN0aW9uKFwicGxheWVyc1wiLCBwbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0UGxheWVycygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==