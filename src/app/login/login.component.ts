import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { FormGroup,FormControl,FormBuilder,Validators } from "@angular/forms"; 
import { AuthenticationService } from '../authentication.service';
import { AlertService } from '../alert.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  userData = {
    username:'',
    password: ''
  }
  loginForm: FormGroup;
  SignupForm: FormGroup; 
  constructor(public _router: Router,
    public fb: FormBuilder,
    private authenticationService: AuthenticationService,   
    private alertService: AlertService,
    public ActivatedRoute: ActivatedRoute
 
  ) { 

    if (this.authenticationService.currentUserValue) { 
      this._router.navigate(['/']);
  }    
        // this.SignupForm = this.fb.group({
          
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

    this.loginForm = this.fb.group({

      username: ["",Validators.required], 
      password: ["",Validators.required], 
    });

    this.returnUrl = this.ActivatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.loginForm.controls; }
 /*This Code is importatnt*/
  // _fnLogin(){
  //    console.log(this.userData);
  //   // window.localStorage['isLoggedIn'] = 1;
  //   sessionStorage.setItem('isLoggedIn', '1');
  //   this._router.navigate(['/dashboard']);
  // }

  submitted
  loading
  onSubmit() {
    this.submitted = true;
    console.log("1");
    // stop here if form is invalid
    if (this.loginForm.invalid) {
       return;
    }
    
    this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this._router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });


    }


  // _fnLogin(){
 
  //   if(this.loginForm.valid){
  //   window.localStorage['isLoggedIn'] = 1;
  //   this._router.navigate(['dashboard']);
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

}


