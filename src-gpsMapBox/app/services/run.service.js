"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RunService = /** @class */ (function () {
    function RunService() {
    }
    RunService.prototype.setDistance = function (distance) {
        this.distance = distance;
    };
    RunService.prototype.getDistance = function () {
        return this.distance;
    };
    RunService.prototype.setTime = function (time) {
        this.time = time;
    };
    RunService.prototype.getTime = function () {
        return this.time;
    };
    RunService.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    RunService.prototype.getSpeed = function () {
        return this.speed;
    };
    RunService.prototype.setPace = function (pace) {
        this.pace = pace;
    };
    RunService.prototype.getPace = function () {
        return this.pace;
    };
    RunService.prototype.reset = function () {
        this.distance = 0;
        this.time = 0;
        this.speed = 0;
        this.pace = 0;
    };
    RunService = __decorate([
        core_1.Injectable()
    ], RunService);
    return RunService;
}());
exports.RunService = RunService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJydW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQztJQUFBO0lBNkNBLENBQUM7SUF2Q0csZ0NBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDRCQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCw0QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQTNDUSxVQUFVO1FBRHRCLGlCQUFVLEVBQUU7T0FDQSxVQUFVLENBNkN0QjtJQUFELGlCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJ1blNlcnZpY2Uge1xyXG4gICAgZGlzdGFuY2U6IG51bWJlcjtcclxuICAgIHRpbWU6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBwYWNlOiBudW1iZXI7XHJcblxyXG4gICAgc2V0RGlzdGFuY2UoZGlzdGFuY2U6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXN0YW5jZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWUodGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwZWVkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFjZShwYWNlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhY2UgPSBwYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhY2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2U9MDtcclxuICAgICAgICB0aGlzLnRpbWU9MDtcclxuICAgICAgICB0aGlzLnNwZWVkPTA7XHJcbiAgICAgICAgdGhpcy5wYWNlPTA7XHJcbiAgICB9XHJcblxyXG59Il19