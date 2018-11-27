"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var firebase = require("nativescript-plugin-firebase/app");
var FirestoreService = /** @class */ (function () {
    function FirestoreService() {
    }
    // Promises 
    FirestoreService.prototype.queryCollection = function (colName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.firestore().collection(colName).get().then(function (querySnapshot) {
                _this.listObjects = [];
                querySnapshot.forEach(function (doc) {
                    _this.listObjects.push(doc.data());
                });
                resolve(_this.listObjects);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    FirestoreService.prototype.queryDoc = function (colName, docId) {
        return new Promise(function (resolve, reject) {
            firebase.firestore().collection(colName).doc(docId).get().then(function (doc) {
                console.log("allo", doc.data());
                resolve(doc.data());
            }).catch(function (error) {
                console.log("mais non");
                reject(error);
            });
        });
    };
    // Observable
    FirestoreService.prototype.fetchDoc = function (colName, docId) {
        var _this = this;
        return rxjs_1.Observable.create(function (subscriber) {
            firebase.firestore().collection(colName).doc(docId).onSnapshot(function (doc) {
                _this.object = doc.data();
                subscriber.next(_this.object);
            });
        });
    };
    FirestoreService.prototype.fetchCollection = function (colName, cond) {
        var _this = this;
        if (cond == undefined) {
            return rxjs_1.Observable.create(function (subscriber) {
                firebase.firestore().collection(colName).onSnapshot(function (snapshot) {
                    _this.listObjects = [];
                    snapshot.forEach(function (doc) {
                        _this.listObjects.push(doc.data());
                    });
                    subscriber.next(_this.listObjects);
                });
            });
        }
        else {
            return rxjs_1.Observable.create(function (subscriber) {
                firebase.firestore().collection(colName).orderBy(cond).onSnapshot(function (snapshot) {
                    _this.listObjects = [];
                    snapshot.forEach(function (doc) {
                        _this.listObjects.push(doc.data());
                    });
                    subscriber.next(_this.listObjects);
                });
            });
        }
    };
    // Add docs
    FirestoreService.prototype.addDocToCollection = function (nameCollection, object) {
        var ref = firebase.firestore().collection(nameCollection).doc();
        firebase.firestore().collection(nameCollection).doc(ref.id).set(object);
        firebase.firestore().collection(nameCollection).doc(ref.id).update({
            "id": ref.id
        });
    };
    FirestoreService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FirestoreService);
    return FirestoreService;
}());
exports.FirestoreService = FirestoreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBa0M7QUFHbEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFHN0Q7SUFLSTtJQUNBLENBQUM7SUFFRCxZQUFZO0lBQ0wsMENBQWUsR0FBdEIsVUFBdUIsT0FBZTtRQUF0QyxpQkFZQztRQVhHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBYSxVQUFDLE9BQU8sRUFBQyxNQUFNO1lBQzFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsYUFBYTtnQkFDN0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO29CQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO2dCQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLG1DQUFRLEdBQWYsVUFBZ0IsT0FBZSxFQUFFLEtBQWE7UUFDMUMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFNLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDbkMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMs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Q0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RSxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQy9ELElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUE1RVEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBOEU1QjtJQUFELHVCQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBmaXJlc3RvcmUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlc3RvcmVTZXJ2aWNlIHtcclxuXHJcbiAgICBsaXN0T2JqZWN0czogQXJyYXk8YW55PjtcclxuICAgIG9iamVjdDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByb21pc2VzIFxyXG4gICAgcHVibGljIHF1ZXJ5Q29sbGVjdGlvbihjb2xOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PGFueT4+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpID0+IHsgXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sTmFtZSkuZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9iamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmxpc3RPYmplY3RzKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHF1ZXJ5RG9jKGNvbE5hbWU6IHN0cmluZywgZG9jSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PntcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSxyZWplY3QpID0+IHsgXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sTmFtZSkuZG9jKGRvY0lkKS5nZXQoKS50aGVuKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbG9cIixkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibWFpcyBub25cIilcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ic2VydmFibGVcclxuICAgIHB1YmxpYyBmZXRjaERvYyhjb2xOYW1lOiBzdHJpbmcsIGRvY0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKHN1YnNjcmliZXIgPT4geyBcclxuICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xOYW1lKS5kb2MoZG9jSWQpLm9uU25hcHNob3QoZG9jID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqZWN0PWRvYy5kYXRhKClcclxuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLm9iamVjdCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZldGNoQ29sbGVjdGlvbihjb2xOYW1lOiBzdHJpbmcsIGNvbmQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFycmF5PGFueT4+e1xyXG4gICAgICAgIGlmIChjb25kID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoc3Vic2NyaWJlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKGNvbE5hbWUpLm9uU25hcHNob3QoKHNuYXBzaG90OiBmaXJlc3RvcmUuUXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9iamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5saXN0T2JqZWN0cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKHN1YnNjcmliZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xOYW1lKS5vcmRlckJ5KGNvbmQpLm9uU25hcHNob3QoKHNuYXBzaG90OiBmaXJlc3RvcmUuUXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9iamVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdE9iamVjdHMucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5saXN0T2JqZWN0cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBkb2NzXHJcbiAgICBwdWJsaWMgYWRkRG9jVG9Db2xsZWN0aW9uKG5hbWVDb2xsZWN0aW9uOiBzdHJpbmcsIG9iamVjdDogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihuYW1lQ29sbGVjdGlvbikuZG9jKCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihuYW1lQ29sbGVjdGlvbikuZG9jKHJlZi5pZCkuc2V0KG9iamVjdCk7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihuYW1lQ29sbGVjdGlvbikuZG9jKHJlZi5pZCkudXBkYXRlKHtcclxuICAgICAgICAgICAgXCJpZFwiOiByZWYuaWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXX0=