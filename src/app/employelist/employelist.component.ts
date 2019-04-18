import { Component, OnInit, Input,TemplateRef } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {
  tempID:any;
  @Input() employeRegistration;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,private firebaseService: FirebaseService) { }

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

}
