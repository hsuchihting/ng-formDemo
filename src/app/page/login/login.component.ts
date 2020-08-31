import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userEmail = true;
  userPassword = true;
  constructor() {}

  submit() {
    if (this.userEmail && this.userPassword) {
      location.href = 'http://localhost:4200/home/home-text';
    } else {
      location.href = 'http://localhost:4200/page-not-found';
    }
  }

  ngOnInit(): void {}
}
