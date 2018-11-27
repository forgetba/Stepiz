"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var firebase = require("nativescript-plugin-firebase/app");
var FirestoreService = /** @class */ (function () {
    function FirestoreService() {
    }
    // return a promise of the collection in param 
    FirestoreService.prototype.queryCollection = function (colName) {
        return new Promise(function (resolve, reject) {
            firebase.firestore().collection(colName).get().then(function (querySnapshot) {
                var list = [];
                querySnapshot.forEach(function (doc) {
                    list.push(doc.data());
                });
                resolve(list);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    // return the doc in param
    FirestoreService.prototype.queryDoc = function (colName, docId) {
        return new Promise(function (resolve, reject) {
            firebase.firestore().collection(colName).doc(docId).get().then(function (data) {
                return data;
            }).catch(function (error) {
                return error;
            });
        });
    };
    // return just the collection in param
    FirestoreService.prototype.listenCollection = function (colName) {
        var _this = this;
        return rxjs_1.Observable.create(function (subscriber) {
            firebase.firestore().collection(colName).onSnapshot(function (snapshot) {
                _this.listObjects = [];
                snapshot.forEach(function (doc) {
                    _this.listObjects.push(doc.data());
                });
                subscriber.next(_this.listObjects);
            });
        });
    };
    // add a doc in a collec in param
    FirestoreService.prototype.addDocToCollection = function (nameCollection, object) {
        firebase.firestore().collection(nameCollection).add(object);
    };
    FirestoreService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FirestoreService);
    return FirestoreService;
}());
exports.FirestoreService = FirestoreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBa0M7QUFHbEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFHN0Q7SUFJSTtJQUNBLENBQUM7SUFFTCwrQ0FBK0M7SUFDcEMsMENBQWUsR0FBdEIsVUFBdUIsT0FBZTtRQUNsQyxPQUFPLElBQUksT0FBTyxDQUFhLFVBQUMsT0FBTyxFQUFDLE1BQU07WUFDMUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxhQUFhO2dCQUM3RCxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO29CQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDVixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCwwQkFBMEI7SUFDZixtQ0FBUSxHQUFmLFVBQWdCLE9BQWUsRUFBRSxLQUFhO1FBQzFDLE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUNuQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO2dCQUMvRCxPQUFPLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO2dCQUNWLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUwsc0NBQXNDO0lBQzNCLDJDQUFnQixHQUF2QixVQUF3QixPQUFlO1FBQXZDLGlCQVVDO1FBVEcsT0FBTyxpQkFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFVBQVU7WUFDL0IsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBQyxRQUFpQztnQkFDbEYsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO29CQUNoQixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCxpQ0FBaUM7SUFDdEIsNkNBQWtCLEdBQXpCLFVBQTBCLGNBQXNCLEVBQUUsTUFBYztRQUM1RCxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBakRRLGdCQUFnQjtRQUQ1QixpQkFBVSxFQUFFOztPQUNBLGdCQUFnQixDQW1ENUI7SUFBRCx1QkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlU2VydmljZSB7XHJcblxyXG4gICAgbGlzdE9iamVjdHM6IEFycmF5PGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4vLyByZXR1cm4gYSBwcm9taXNlIG9mIHRoZSBjb2xsZWN0aW9uIGluIHBhcmFtIFxyXG4gICAgcHVibGljIHF1ZXJ5Q29sbGVjdGlvbihjb2xOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PGFueT4+e1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSxyZWplY3QpID0+IHsgXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sTmFtZSkuZ2V0KCkudGhlbihxdWVyeVNuYXBzaG90ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsaXN0KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4vLyByZXR1cm4gdGhlIGRvYyBpbiBwYXJhbVxyXG4gICAgcHVibGljIHF1ZXJ5RG9jKGNvbE5hbWU6IHN0cmluZywgZG9jSWQ6IHN0cmluZyk6IGFueXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSxyZWplY3QpID0+IHsgXHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sTmFtZSkuZG9jKGRvY0lkKS5nZXQoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4vLyByZXR1cm4ganVzdCB0aGUgY29sbGVjdGlvbiBpbiBwYXJhbVxyXG4gICAgcHVibGljIGxpc3RlbkNvbGxlY3Rpb24oY29sTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxBcnJheTxhbnk+PntcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoc3Vic2NyaWJlciA9PiB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sTmFtZSkub25TbmFwc2hvdCgoc25hcHNob3Q6IGZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RPYmplY3RzID0gW107XHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0T2JqZWN0cy5wdXNoKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5saXN0T2JqZWN0cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuLy8gYWRkIGEgZG9jIGluIGEgY29sbGVjIGluIHBhcmFtXHJcbiAgICBwdWJsaWMgYWRkRG9jVG9Db2xsZWN0aW9uKG5hbWVDb2xsZWN0aW9uOiBzdHJpbmcsIG9iamVjdDogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihuYW1lQ29sbGVjdGlvbikuYWRkKG9iamVjdCk7XHJcbiAgICB9XHJcblxyXG59Il19