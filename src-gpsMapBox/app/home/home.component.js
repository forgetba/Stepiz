"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var geolocation = require("nativescript-geolocation");
var run_service_1 = require("../services/run.service");
element_registry_1.registerElement("Mapbox", function () { return require("nativescript-mapbox").MapboxView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(runService) {
        this.runService = runService;
        this.following = false;
        this.distance = 0;
        this.seconds = 0;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.onMapReady = function (args) {
        this.map = args.map;
    };
    HomeComponent.prototype.toggleFollowing = function () {
        this.following = !(this.following);
        this.map.trackUser({
            mode: this.following ? "FOLLOW" : "NONE",
            animated: false
        });
        this.map.setZoomLevel({
            level: 18,
            animated: true
        });
    };
    HomeComponent.prototype.getDeviceLocation = function () {
        return new Promise(function (resolve, reject) {
            geolocation.getCurrentLocation({ timeout: 10000 }).then(function (location) {
                resolve(location);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    HomeComponent.prototype.startMonitor = function () {
        var _this = this;
        this.distance = 0;
        this.seconds = 0;
        this.map.removePolylines();
        this.id = setInterval(function () {
            _this.getDeviceLocation().then(function (result) {
                _this.previousLoc = _this.currentLoc;
                _this.currentLoc = result;
                _this.updateDistance(_this.previousLoc, _this.currentLoc);
                _this.seconds++;
                _this.map.addPolyline({
                    color: '#f28610',
                    width: 3,
                    opacity: 0.6,
                    points: [
                        {
                            'lat': _this.previousLoc.latitude,
                            'lng': _this.previousLoc.longitude
                        },
                        {
                            'lat': _this.currentLoc.latitude,
                            'lng': _this.currentLoc.longitude
                        }
                    ]
                });
            }, function (error) {
                console.error(error);
            });
        }, 1000);
    };
    HomeComponent.prototype.stopMonitor = function () {
        clearInterval(this.id);
        this.runService.setDistance(this.distance);
        this.runService.setTime(this.seconds);
        this.runService.setSpeed((this.distance / this.seconds) * 3.6);
        this.runService.setPace(this.seconds / 60 * this.distance);
    };
    HomeComponent.prototype.updateDistance = function (loc1, loc2) {
        this.distance += geolocation.distance(loc1, loc2);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            moduleId: module.id,
            templateUrl: './home.component.html'
        }),
        __metadata("design:paramtypes", [run_service_1.RunService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwwRUFBd0U7QUFFeEUsc0RBQXdEO0FBQ3hELHVEQUFxRDtBQUVyRCxrQ0FBZSxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFRM0U7SUFVQyx1QkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVB2QyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSTNCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsWUFBTyxHQUFVLENBQUMsQ0FBQztJQUd0QixDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxrQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDeEMsUUFBUSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNELENBQUM7SUFFTyx5Q0FBaUIsR0FBekI7UUFDSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixXQUFX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ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnlcIjtcbmltcG9ydCB7IE1hcGJveFZpZXdBcGksIFZpZXdwb3J0IGFzIE1hcGJveFZpZXdwb3J0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tYXBib3hcIjtcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IFJ1blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ydW4uc2VydmljZSc7XG5cbnJlZ2lzdGVyRWxlbWVudChcIk1hcGJveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1hcGJveFwiKS5NYXBib3hWaWV3KTtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnaG9tZScsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2hvbWUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSBtYXA6IE1hcGJveFZpZXdBcGk7XG4gICAgZm9sbG93aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJldmlvdXNMb2M6IGdlb2xvY2F0aW9uLkxvY2F0aW9uO1xuICAgIGN1cnJlbnRMb2M6IGdlb2xvY2F0aW9uLkxvY2F0aW9uO1xuICAgIGlkOiBudW1iZXI7XG4gICAgZGlzdGFuY2U6IG51bWJlciA9MDtcbiAgICBzZWNvbmRzOiBudW1iZXIgPTA7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBydW5TZXJ2aWNlOiBSdW5TZXJ2aWNlKSB7IFxuXHR9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHRvbk1hcFJlYWR5KGFyZ3MpOiB2b2lkIHtcblx0XHR0aGlzLm1hcD1hcmdzLm1hcDtcblx0fVxuXG5cdHRvZ2dsZUZvbGxvd2luZygpOiB2b2lkIHtcblx0XHR0aGlzLmZvbGxvd2luZyA9ICEodGhpcy5mb2xsb3dpbmcpO1xuXG5cdFx0dGhpcy5tYXAudHJhY2tVc2VyKHtcbiAgICBcdFx0bW9kZTogdGhpcy5mb2xsb3dpbmcgPyBcIkZPTExPV1wiIDogXCJOT05FXCIsXG4gICAgXHRcdGFuaW1hdGVkOiBmYWxzZVxuXHRcdH0pO1xuXHRcdFxuXHRcdHRoaXMubWFwLnNldFpvb21MZXZlbCh7XG5cdFx0XHRsZXZlbDogMTgsXG5cdFx0XHRhbmltYXRlZDogdHJ1ZVxuXHRcdH0pO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGdldERldmljZUxvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oe3RpbWVvdXQ6IDEwMDAwfSkudGhlbihsb2NhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsb2NhdGlvbik7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydE1vbml0b3IoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzdGFuY2U9MDtcbiAgICAgICAgdGhpcy5zZWNvbmRzPTA7XG4gICAgICAgIHRoaXMubWFwLnJlbW92ZVBvbHlsaW5lcygpO1xuICAgICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nZXREZXZpY2VMb2NhdGlvbigpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzTG9jPXRoaXMuY3VycmVudExvYztcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMb2M9cmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGlzdGFuY2UodGhpcy5wcmV2aW91c0xvYywgdGhpcy5jdXJyZW50TG9jKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY29uZHMrKztcbiAgICAgICAgICAgICAgICB0aGlzLm1hcC5hZGRQb2x5bGluZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2YyODYxMCcsIC8vIFNldCB0aGUgY29sb3Igb2YgdGhlIGxpbmUgKGRlZmF1bHQgYmxhY2spXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLCAvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBsaW5lIChkZWZhdWx0IDUpXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNiwgLy9UcmFuc3BhcmVuY3kgLyBhbHBoYSwgcmFuZ2luZyAwLTEuIERlZmF1bHQgZnVsbHkgb3BhcXVlICgxKS5cbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhdCc6IHRoaXMucHJldmlvdXNMb2MubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xuZyc6IHRoaXMucHJldmlvdXNMb2MubG9uZ2l0dWRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYXQnOiB0aGlzLmN1cnJlbnRMb2MubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xuZyc6IHRoaXMuY3VycmVudExvYy5sb25naXR1ZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgc3RvcE1vbml0b3IoKTogdm9pZCB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG4gICAgICAgIHRoaXMucnVuU2VydmljZS5zZXREaXN0YW5jZSh0aGlzLmRpc3RhbmNlKTtcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlLnNldFRpbWUodGhpcy5zZWNvbmRzKTtcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlLnNldFNwZWVkKCh0aGlzLmRpc3RhbmNlL3RoaXMuc2Vjb25kcykqMy42KTtcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlLnNldFBhY2UodGhpcy5zZWNvbmRzLzYwKnRoaXMuZGlzdGFuY2UpO1xuICAgIH1cblxuICAgIHVwZGF0ZURpc3RhbmNlKGxvYzE6IGdlb2xvY2F0aW9uLkxvY2F0aW9uLCBsb2MyOiBnZW9sb2NhdGlvbi5Mb2NhdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRpc3RhbmNlKz1nZW9sb2NhdGlvbi5kaXN0YW5jZShsb2MxLGxvYzIpO1xuICAgIH1cblxuICAgIC8vIDIgQlVUVE9OUyBESVNUQU5DRVxuXHQvLyBnZXRMb2NhdGlvbjEoKTogdm9pZCB7XG4gICAgLy8gICAgIHRoaXMuZ2V0RGV2aWNlTG9jYXRpb24oKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLmxvYzE9cmVzdWx0O1xuICAgIC8vICAgICB9LGVycm9yID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gZ2V0TG9jYXRpb24yKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLmdldERldmljZUxvY2F0aW9uKCkudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5sb2MyPXJlc3VsdDtcbiAgICAvLyAgICAgfSxlcnJvciA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIFxuICAgIC8vIGdldERpc3RhbmNlKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLmRpc3RhbmNlPWdlb2xvY2F0aW9uLmRpc3RhbmNlKHRoaXMubG9jMSx0aGlzLmxvYzIpO1xuICAgIC8vIH1cbiAgICBcbn0iXX0=