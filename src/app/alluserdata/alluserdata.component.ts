import { Component, OnInit,Input,TemplateRef } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-alluserdata',
  templateUrl: './alluserdata.component.html',
  styleUrls: ['./alluserdata.component.css']
})
export class AlluserdataComponent implements OnInit {

  constructor(public firebaseService:FirebaseService) { }

  ngOnInit() {
    this.getalluserinfo();
  }
  emplist:any = [] ;
  getalluserinfo(){
    this.firebaseService.getEmpList().subscribe( (data) => {

      this.emplist = data;
      console.log(this.emplist);
    })
  }
}
