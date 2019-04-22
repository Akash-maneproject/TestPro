import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  customer;
  authflag = false;
  constructor(private _db:AngularFireDatabase, public httpClient:HttpClient ) { }

  getEmpData(){
    // console.log(this._db.list("/example").snapshotChanges());
    return  this._db.list("/example").snapshotChanges()
    
  }

  getLoginData(){
    
    return  this._db.list("/login").snapshotChanges(); 
  }

  // jwtData(){

  //   return this.httpClient.post<{access_token:  string}>('http://www.your-server.com/auth/login', {email, password}).pipe(tap(res => {
  //     localStorage.setItem('access_token', res.access_token);
  // }))
  // }

  setAuthFlag(value:boolean){

    localStorage.authflag = value ? 'true': '';
  }

  getAuthFlag(){
    return localStorage.authflag;
  }

  registratonData(data){
     return this.httpClient.post('http://localhost:3004/posts',data)
    
  }
  updateRegistratonData(data){
    console.log(data);
    return this.httpClient.put('http://localhost:3004/posts/'+data.id,data)
   
 }

  getEmpList(){

    return this.httpClient.get('http://localhost:3004/posts')
  }

  delete_Emp(id){
    return this.httpClient.delete('http://localhost:3004/posts/'+id)
  }


}


