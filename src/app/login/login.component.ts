import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  users = [
    { name: "abc", password: 101 },
    { name: "xyz", password: 102 },
    { name: "mno", password: 103 },

  ];

  constructor(private fb: FormBuilder, private router: Router, private user: UserService) {
    this.loginForm = fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required]]
    })

  }

  ngOnInit(): void {
  }

  Login() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let login = this.loginForm.value;
    if (this.users.find(x => x.name == login.name && x.password == login.password)) {
      localStorage.setItem('User', JSON.stringify(login));
      this.user.isUser = true;
      this.router.navigate(['']);
    }
    else {
      alert("User Id/Password Wrong")
    }
  }


  goBack() {
    this.router.navigate(['/home']);
  }
}
