"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var run_service_1 = require("../services/run.service");
var PostrunComponent = /** @class */ (function () {
    function PostrunComponent(runService) {
        this.runService = runService;
        this.distance = this.runService.getDistance();
        this.time = this.runService.getTime();
        this.speed = this.runService.speed;
        this.pace = this.runService.pace;
    }
    PostrunComponent.prototype.ngOnInit = function () { };
    PostrunComponent.prototype.endActivity = function () {
        this.runService.reset();
    };
    PostrunComponent = __decorate([
        core_1.Component({
            selector: 'postrun',
            moduleId: module.id,
            templateUrl: './postrun.component.html',
            styleUrls: ['./postrun.component.css']
        }),
        __metadata("design:paramtypes", [run_service_1.RunService])
    ], PostrunComponent);
    return PostrunComponent;
}());
exports.PostrunComponent = PostrunComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHJ1bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3N0cnVuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCx1REFBcUQ7QUFTckQ7SUFPQywwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxzQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBbEJXLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3RCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0FTK0Isd0JBQVU7T0FQOUIsZ0JBQWdCLENBbUI1QjtJQUFELHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJ1blNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ydW4uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3Bvc3RydW4nLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9wb3N0cnVuLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcG9zdHJ1bi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQb3N0cnVuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRkaXN0YW5jZTogbnVtYmVyO1xuXHR0aW1lOiBudW1iZXI7XG5cdHBhY2U6IG51bWJlcjtcblx0c3BlZWQ6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJ1blNlcnZpY2U6IFJ1blNlcnZpY2UpIHsgXG5cdFx0dGhpcy5kaXN0YW5jZT10aGlzLnJ1blNlcnZpY2UuZ2V0RGlzdGFuY2UoKTtcblx0XHR0aGlzLnRpbWU9dGhpcy5ydW5TZXJ2aWNlLmdldFRpbWUoKTtcblx0XHR0aGlzLnNwZWVkPXRoaXMucnVuU2VydmljZS5zcGVlZDtcblx0XHR0aGlzLnBhY2U9dGhpcy5ydW5TZXJ2aWNlLnBhY2U7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdGVuZEFjdGl2aXR5KCkgOiB2b2lkIHtcblx0XHR0aGlzLnJ1blNlcnZpY2UucmVzZXQoKTtcblx0fVxufSJdfQ==