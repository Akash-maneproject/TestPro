import { Component, OnInit,EventEmitter, Output } from '@angular/core';

import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() onRegister = new EventEmitter();

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  userRegisterData = {
    userregistername:'',
    userregisteremail: '',
    userregisterpass:'',
    userregisterconfpass:''
  }
  

  _onRegister(){
  this.firebaseService.registratonData(this.userRegisterData)
  .subscribe((res) => {
    // this.dunebookList = res;
    console.log(res);
    this.onRegister.emit(res);
  });
  
}



}
