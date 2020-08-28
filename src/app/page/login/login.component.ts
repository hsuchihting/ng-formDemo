import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myEmail: string = 'text@email.com';
  myPassword: string = 'abc12345';

  constructor() {}
  // tslint:disable-next-line: typedef
  loginPage() {
    location.href = 'http://localhost:4200/home/home-text';
  }
  ngOnInit(): void {}
}
