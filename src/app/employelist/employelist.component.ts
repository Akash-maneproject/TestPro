import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {
  tempID: any;
  @Input() employeRegistration: any;
  @Input() isadmincredintial: boolean;
  modalRef: BsModalRef;

  selectAll: Boolean = false;

  constructor(private modalService: BsModalService,
    private firebaseService: FirebaseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  Delete_confirm() {

    this.firebaseService.delete_Emp(this.tempID).subscribe((data) => {
      console.log(data);
      this.employeRegistration.forEach((element, index) => {
        if (element.id == this.tempID) {
          this.employeRegistration.splice(index, 1)
        }
      });
    })
    this.modalRef.hide();
  }
  decline() {
    this.modalRef.hide();
  }
  openDeleteModel(id, deleteTemplateRef: TemplateRef<any>) {
    console.log("hoooo" + id);

    this.modalRef = this.modalService.show(deleteTemplateRef, { class: 'modal-sm' });
    //this.Delete_confirm(id);
    this.tempID = id;

  }


  editempData = {
    userregistername: '',
    userregisteremail: '',
    userregisterpass: '',
    userregisterconfpass: ''
  }
  openRedistration(emp, regeditTemplateRef: TemplateRef<any>) {
    console.log("hoooo" + emp);
    this.editempData = JSON.parse(JSON.stringify(emp));
    this.modalRef = this.modalService.show(regeditTemplateRef, { class: 'modal-sm' });

  }
  onRegisterUpdate() {
    console.log("hoooo1");
    this.modalRef.hide();
    console.log("sdsdsd");
    this.firebaseService.getEmpList().subscribe((data1) => {
      this.employeRegistration = data1;
    })

  }


  selectAllChange() {
    console.log(this.selectAll);
    if (this.selectAll) {
      this.employeRegistration.forEach(element => {
        element.isChked = true;
      });
    } else {
      this.employeRegistration.forEach(element => {
        element.isChked = false;
      });
    }
  }

  selectMe(empData) {
    let isAllselected = true;
    if (empData.isChked) {
      this.employeRegistration.forEach(element => {
        if (element.isChked == false) {
          isAllselected = false
        }
      });

      this.selectAll = isAllselected ? true : false;

    } else {
      this.selectAll = false;
    }
  }

  deleteSelected() {
    console.log("Delete");

    this.employeRegistration.forEach(element => {
      if (element.isChked) {

        this.firebaseService.delete_Emp(element.id).subscribe((data) => {
          console.log(data);
          this.employeRegistration.forEach((ele, index) => {
            if (ele.id == element.id) {
              this.employeRegistration.splice(index, 1)
            }
          });

        });
      }
    });
  }
}
