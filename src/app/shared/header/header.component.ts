import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/user.service';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  loggedUser: boolean = false
  userName: any;
  loggedUsers:any;
  constructor(public user: UserService) { }

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('User')
    if (this.currentUser != null) {
      this.loggedUser = true;
      this.userName = new BehaviorSubject<string>(JSON.parse(this.currentUser));
  
    console.log(this.userName.value.name);
    this.loggedUsers = this.userName.value.name
    }
    else {
      this.loggedUser = false;
    }

  }
  logOut() {
    this.user.logout();
    this.user.isUser = false;
  }
  
}
