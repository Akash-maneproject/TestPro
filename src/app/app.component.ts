import { Component } from '@angular/core';
import { Dunebook } from './Dunebook';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dunebookList: any;

  constructor(
    private router:Router
    ,private httpClient: HttpClient) { }
  getDunebookData() {
    this.httpClient.post('http://localhost:3004/posts',{
      "title": "test",
      "author": "test1"
    })
      .subscribe((res) => {
        // this.dunebookList = res;
        console.log(res);
      });


  }

  // showNavBar:Boolean =false; 

  // changeOfRoutes(){
  //   console.log(this.router.url)
  //   if(this.router.url != '/login'){
  //     this.showNavBar =true;
  //   }else{
  //     this.showNavBar =false;
  //   }
  //  }


 
}
