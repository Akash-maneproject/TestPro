import { Component, OnInit, Input,TemplateRef } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {
  tempID:any;
  @Input() employeRegistration:any;
  @Input() isadmincredintial: boolean;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,
    private firebaseService: FirebaseService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    
  }

  Delete_confirm(){

       this.firebaseService.delete_Emp(this.tempID).subscribe( (data) => {
       console.log(data);
        this.employeRegistration.forEach( (element,index) => {
            if(element.id == this.tempID){
              this.employeRegistration.splice(index,1)
            }          
        });
      })
    this.modalRef.hide();
  }
  decline(){
    this.modalRef.hide();
  }
  openDeleteModel(id,deleteTemplateRef:TemplateRef<any>){
    this.modalRef = this.modalService.show(deleteTemplateRef, {class: 'modal-sm'});
//this.Delete_confirm(id);
this.tempID = id;

}


editempData = {
  userregistername:'',
  userregisteremail: '',
  userregisterpass:'',
  userregisterconfpass:''
}
openRedistration(emp,regeditTemplateRef:TemplateRef<any>){
 this.editempData = JSON.parse(JSON.stringify(emp));
  this.modalRef = this.modalService.show(regeditTemplateRef, {class: 'modal-sm'});  

}
onRegisterUpdate(){
  this.modalRef.hide();
  console.log("sdsdsd");
  this.firebaseService.getEmpList().subscribe( (data1)=>{
  this.employeRegistration = data1;
})

}


}
