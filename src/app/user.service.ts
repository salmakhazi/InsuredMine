import { Injectable } from '@angular/core';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  isUser: boolean = false;
 
  constructor(private router: Router) { }


  isUserLogged(): boolean {
    if (localStorage.getItem('User') != null) {
      this.isUser = true;
      return true;
    }
    else {
      this.isUser = false;
      return false;
    }

  }

  logout() {
    localStorage.removeItem('User');
  }
}
