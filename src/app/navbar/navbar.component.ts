import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public firebaseService: FirebaseService,public _router: Router) { }

  ngOnInit() {
  }

  _fnLogout(){

    this.firebaseService.setAuthFlag(false);
    localStorage.clear();
    sessionStorage.clear();
   
    this._router.navigate(['/login']);

  }

}
