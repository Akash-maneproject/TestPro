import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { FirebaseService } from '../firebase.service';

import { HttpClientModule,HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Output() _onRegister = new EventEmitter();
  @Input() userRegisterData;
  @Output() onRegisterUpdate = new EventEmitter();
  
  @Input() isDisable;
 
  selectedfile: File = null;
  // D = this.isDisable;
  constructor(public firebaseService: FirebaseService,private httpClient: HttpClient) { 
    // this.isDisable="qqqqqqqqqqq";
    
  }
  
  ngOnInit() {
    console.log("D:",this.isDisable);
    
    //  this.userRegisterData.male = true;
    // this.userRegisterData.TL = true;  
    
  }

  // userRegisterData = {
  //   userregistername:'',
  //   userregisteremail: '',
  //   userregisterpass:'',
  //   userregisterconfpass:''
  // }

  onFileSelected(event){

    this.selectedfile =<File> event.target.files[0];

    console.log(event);

  }
  _onRegister1() {
    
    const fd = new FormData();

//file uoload for firebase serivice need to create and 

    let file_url = "./assets/";
    
    let imgdataFile = this.userRegisterData.imgdataFile.split("\\");

    console.log(imgdataFile);

    this.userRegisterData.imgdataFile = file_url+imgdataFile[2]
   
    console.log(this.userRegisterData.imgdataFile);


    //this.heroService.getHeroes().then((heroes) => { this heroes= heroes ])
    this.firebaseService.registratonData(this.userRegisterData)
      .subscribe((res) => {
        // this.dunebookList = res;
        console.log(res);
        
        this._onRegister.emit(res);
        this.userRegisterData = {
          userregistername: '',
          userregisteremail: '',
          userregisterpass: '',
          userregisterconfpass: '',
          selectdata:'',
          male:'',
          isChked: '',
          TL: '',
          JM: '',
          RL: '',
          imgdataFile: ''
        }
      });

  }
  _fnOnSubmit(id) {
  
    if (id) {
      console.log("1");
      this._RegUpdate();
    } else {
      console.log("2");
      this._onRegister1();
    }
  }


 

  _RegUpdate() {
    console.log("asdsad");
    console.log(this.userRegisterData);
    
    let file_url = "http://localhost:3000/upload/src/public/";
    
    this.firebaseService.updateRegistratonData(this.userRegisterData)
      .subscribe((res) => {
        // this.dunebookList = res;
        console.log("Subscriber responded",res);
        // this._onRegister.emit(res);
        this.userRegisterData = {
          userregistername: '',
          userregisteremail: '',
          userregisterpass: '',
          userregisterconfpass: '',
          selectdata:'',
          male:'',
          isChked: '',
          TL: '',
          JM: '',
          RL: '',
          imgdataFile: ''
              
        }
        this.onRegisterUpdate.emit();
      });



  }

}
