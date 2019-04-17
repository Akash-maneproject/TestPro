import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  customer;
  authflag = false;
  constructor(private _db:AngularFireDatabase) { }

  getEmpData(){
    // console.log(this._db.list("/example").snapshotChanges());
    return  this._db.list("/example").snapshotChanges()
    
  }


  getLoginData(){
    return  this._db.list("/login").snapshotChanges(); 
  }

  setAuthFlag(value:boolean){

    localStorage.authflag = value ? 'true': '';
  }

  getAuthFlag(){
    return localStorage.authflag;
  }
}
