import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { firestore } from "nativescript-plugin-firebase";

const firebase = require("nativescript-plugin-firebase/app");

@Injectable()
export class FirestoreService {

    listObjects: Array<any>;
    object: any;

    constructor() {
    }

    // Promises which does not enable real time update, still useful especially for the profiles 

    // To get a collection using its name
    public queryCollection(colName: string): Promise<Array<any>>{
        return new Promise<Array<any>>((resolve,reject) => { 
            firebase.firestore().collection(colName).get().then(querySnapshot => {
                this.listObjects = [];
                querySnapshot.forEach(doc => {
                    this.listObjects.push(doc.data());
                });
                resolve(this.listObjects);
            }).catch(error => {
                reject(error);
            });
        });
    }

    // To get a document using its ID and the collection's name
    public queryDoc(colName: string, docId: string): Promise<any>{
        return new Promise<any>((resolve,reject) => { 
            firebase.firestore().collection(colName).doc(docId).get().then(doc => {
                console.log("allo",doc.data());
                resolve(doc.data());
            }).catch(error => {
                console.log("mais non")
                reject(error);
            });
        });
    }

    // Observable which are useful to get real time updates, especially for the lists

    // To get a document using its ID and the collection's name
    public fetchDoc(colName: string, docId: string): Observable<any>{
        return Observable.create(subscriber => { 
            firebase.firestore().collection(colName).doc(docId).onSnapshot(doc => {
                this.object=doc.data()
                subscriber.next(this.object);
            })
        });
    }

    // To get a collection using its name - You can also add a condition if you want to sort the elements using a specific attribute
    public fetchCollection(colName: string, cond?: string): Observable<Array<any>>{
        if (cond == undefined) {
            return Observable.create(subscriber => {
                firebase.firestore().collection(colName).onSnapshot((snapshot: firestore.QuerySnapshot) => {
                    this.listObjects = [];
                    snapshot.forEach(doc => {
                        this.listObjects.push(doc.data());
                    });
                    subscriber.next(this.listObjects);
                });
            });
        } else {
            return Observable.create(subscriber => {
                firebase.firestore().collection(colName).orderBy(cond).onSnapshot((snapshot: firestore.QuerySnapshot) => {
                    this.listObjects = [];
                    snapshot.forEach(doc => {
                        this.listObjects.push(doc.data());
                    });
                    subscriber.next(this.listObjects);
                });
            });
        }
    }

    // Add docs to collection
    public addDocToCollection(nameCollection: string, object: Object): void {
        const ref = firebase.firestore().collection(nameCollection).doc();
        firebase.firestore().collection(nameCollection).doc(ref.id).set(object);
        firebase.firestore().collection(nameCollection).doc(ref.id).update({
            "id": ref.id
        });
    }

}