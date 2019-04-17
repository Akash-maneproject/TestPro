import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  data;
  constructor(public _service: FirebaseService, private activatedRoute:ActivatedRoute) { 
  }
  
  ngOnInit() {
  
    // this.data = this.activatedRoute.snapshot['pagenotfoundData'];
    console.log(this.data);
    
     this._service.getEmpData().subscribe(items => {
    
        this.data = [items][0];
          console.log(this.data);
      });
    
  }
  
}