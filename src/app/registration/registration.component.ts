import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() _onRegister = new EventEmitter();
  @Input() userRegisterData;
  @Output() onRegisterUpdate = new EventEmitter();
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  // userRegisterData = {
  //   userregistername:'',
  //   userregisteremail: '',
  //   userregisterpass:'',
  //   userregisterconfpass:''
  // }


  _onRegister1() {

    console.log("regsubmit");
    this.firebaseService.registratonData(this.userRegisterData)
      .subscribe((res) => {
        // this.dunebookList = res;
        console.log(res);
        this._onRegister.emit(res);
        this.userRegisterData = {
          userregistername: '',
          userregisteremail: '',
          userregisterpass: '',
          userregisterconfpass: ''
        }
      });

  }
  _fnOnSubmit(id) {
    console.log(id)
    if (id) {
      this._RegUpdate();
    } else {
      this._onRegister1();
    }
  }


 

  _RegUpdate() {
    console.log("asdsad");
    console.log(this.userRegisterData);
    this.firebaseService.updateRegistratonData(this.userRegisterData)
      .subscribe((res) => {
        // this.dunebookList = res;
        console.log("Subscriber responded",res);
        // this._onRegister.emit(res);
        this.userRegisterData = {
          userregistername: '',
          userregisteremail: '',
          userregisterpass: '',
          userregisterconfpass: ''
        }
        this.onRegisterUpdate.emit();
      });



  }

}
