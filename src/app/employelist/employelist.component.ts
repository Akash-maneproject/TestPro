import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {

  @Input() employeRegistration;

  constructor() { }

  ngOnInit() {
  }

}
