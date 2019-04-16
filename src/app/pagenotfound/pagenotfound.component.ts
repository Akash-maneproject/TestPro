import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  data;
  constructor(public _service: FirebaseService) { 
  }
  
  ngOnInit() {
  
     this._service.getEmpData().subscribe(items => {
    
        this.data = [items][0];
          console.log(this.data);
      });
    
  }
  
}