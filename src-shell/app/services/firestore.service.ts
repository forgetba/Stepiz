import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { firestore } from "nativescript-plugin-firebase";

const firebase = require("nativescript-plugin-firebase/app");

@Injectable()
export class FirestoreService {

    listObjects: Array<any>;

    constructor() {
    }

// return a promise of the collection in param 
    public queryCollection(colName: string): Promise<Array<any>>{
        return new Promise<Array<any>>((resolve,reject) => { 
            firebase.firestore().collection(colName).get().then(querySnapshot => {
                const list = [];
                querySnapshot.forEach(doc => {
                    list.push(doc.data());
                });
                resolve(list);
            }).catch(error => {
                reject(error);
            });
        });
    }

// return the doc in param
    public queryDoc(colName: string, docId: string): any{
        return new Promise<any>((resolve,reject) => { 
            firebase.firestore().collection(colName).doc(docId).get().then(data => {
                return data;
            }).catch(error => {
                return error;
            });
        });
    }

// return just the collection in param
    public listenCollection(colName: string): Observable<Array<any>>{
        return Observable.create(subscriber => {
            firebase.firestore().collection(colName).onSnapshot((snapshot: firestore.QuerySnapshot) => {
                this.listObjects = [];
                snapshot.forEach(doc => {
                    this.listObjects.push(doc.data());
                });
                subscriber.next(this.listObjects);
            });
        });
    }

// add a doc in a collec in param
    public addDocToCollection(nameCollection: string, object: Object): void {
        firebase.firestore().collection(nameCollection).add(object);
    }

}