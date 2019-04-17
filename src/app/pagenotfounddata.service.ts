import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { HttpClient } from "@angular/common/http";
// import { http } from "@angular/htt";
@Injectable({
  providedIn: 'root'
})

export class PagenotfounddataService implements Resolve<any> {
  constructor(public firebaseService: FirebaseService,public httpClient:HttpClient) { }

  // resolve() {

  //   return this.firebaseService.getEmpData();
  // }

  resolve() {
    console.log("test");
    // let promis = new Promise(res)
    // return this.httpClient.get("https://reqres.in/api/users");
      return this.firebaseService.getEmpData();
    // return this.firebaseService.getEmpData();;
  }
}
