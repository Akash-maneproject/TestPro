import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(public router: Router){
    console.log('navigate to login 111');
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("window.localStorage['isLoggedIn']")
      console.log(window.localStorage['isLoggedIn'])
    if (parseInt(sessionStorage.getItem('isLoggedIn'))) {
      return true;
    }else{
      // alert('Not Logged in')
      console.log('navigate to login')
      this.router.navigate(['/login']);
      return false;
    }
  }
}

