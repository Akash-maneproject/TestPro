import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  customer;
  constructor(private _db:AngularFireDatabase) { }

  getEmpData(){
    return  this._db.list("/example").snapshotChanges()
    
  }
}
