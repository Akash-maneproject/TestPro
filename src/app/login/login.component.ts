import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';
import { FirebaseService } from '../firebase.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgxLoadingModule } from 'ngx-loading';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  modalRef: BsModalRef;
  public loading = false;
  userData = {
    username: '',
    password: ''
  }

  userRegisterData = {
    userregistername: '',
    userregisteremail: '',
    userregisterpass: '',
    userregisterconfpass: '',
    male: true,
    selectdata: '',
    TL: true,
    JM: false,
    RL: false
  }
  loginForm: FormGroup;
  SignupForm: FormGroup;
  constructor(public _router: Router,
    public fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    public activatedRoute: ActivatedRoute,
    public firebaseService: FirebaseService,
    private modalService: BsModalService,
    public ngxLoadingModule: NgxLoadingModule

  ) {

    //   if (this.authenticationService.currentUserValue) { 
    //     this._router.navigate(['/']);
    // }    
    //       // this.SignupForm = this.fb.group({

    // uname_signup: ["",Validators.required],
    // pass_signup:  ["",Validators.required],
    // confirmpass_signup: ["",Validators.required],
    // address_signup: ["",Validators.required],
    // District_signup: ["",Validators.required],
    // Taluka_signup: ["",Validators.required],
    // country_signup: ["",Validators.required],
    // });
  }

  ngOnInit() {

    this.loading = true;
    console.log("login comp");
    this.getRegData();
    this.loginForm = this.fb.group({

      username: ["", Validators.required],
      password: ["", Validators.required],
    });


    // this.returnUrl = this.ActivatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }
  emplist: any;
  getRegData() {

    this.firebaseService.getEmpList().subscribe((data) => {
      this.loading = false;
      this.emplist = data;
      // console.log(this.emplist);
    })

  }
  // get f() { return this.loginForm.controls; }
  /*This Code is importatnt*/
  data;
  _fnLogin() {
    //console.log(this.userData);
    // window.localStorage['isLoggedIn'] = 1;
    //sessionStorage.setItem('isLoggedIn', '1');

    // console.log(this.data);


    this.firebaseService.getLoginData().subscribe(items => {

      this.data = items;
      let username = this.data[1].payload.node_.value_;
      let password = this.data[0].payload.node_.value_;
      //  let type = this.data[2].payload.node_.value_;
      console.log(username);
      console.log(password);
      if (username == this.userData.username && password == this.userData.password) {
        window.localStorage['isLoggedIn'] = 1;
        this._router.navigate(['/dashboard']);
        this.firebaseService.setAuthFlag(true);
      } else {

        alert("Username and password is incorrect");
        this.firebaseService.setAuthFlag(false);
        return;
      }
    });
  }
  _fnCancle() {

    this.userData.username = "";
    this.userData.password = "";
    return;
  }
  openModal(template: TemplateRef<any>) {
    this.userRegisterData = {
      userregistername: '',
      userregisteremail: '',
      userregisterpass: '',
      userregisterconfpass: '',
      male: true,
      selectdata: '',
      TL: true,
      JM: false,
      RL: false
    }
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });

  }
  onRegisterUpdate() {
    this.modalRef.hide();
    // this.getRegData();
  }


  Register() {

    this.getRegData();
    this.modalRef.hide();

  }
  submitted

  // onSubmit() {
  //   this.submitted = true;
  //  // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //      return;
  //   }else{

  //     this._router.navigate(['/dashboard'])
  //   }

  // this.loading = true;
  //     this.authenticationService.login(this.f.username.value, this.f.password.value)
  //         .pipe(first())
  //         .subscribe(
  //             data => {
  //                 this._router.navigate([this.returnUrl]);
  //             },
  //             error => {
  //                 this.alertService.error(error);
  //                 this.loading = false;
  //             });


}


  // _fnLogin(){

  //   if(this.loginForm.valid){
  //   window.localStorage['isLoggedIn'] = 1;
  //   this._router.navigate(['/dashboard']);
  //   }else{
  //    alert('Form is invalid')
  //   }
  // }
//   _fnSignup(){
//     if(this.SignupForm.valid){
//     window.localStorage['issignup'] = 1;
//     console.log();
//     this._router.navigate(['dashboard']);


//     }else{
//      alert('Form is invalid')
//     }
//   }




