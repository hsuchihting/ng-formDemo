import { FeatureService } from 'src/app/feature.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = true;
  password = true;
  pattern =
    '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';
  postId: any;
  href: string;

  constructor(
    public featureSvc: FeatureService,
    public formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  // tslint:disable-next-line: typedef
  get f() {
    return this.loginForm.controls;
  }

  // tslint:disable-next-line: typedef
  submit() {
    const data = {
      CompanySeq: '1',
      Account: 'tim.hsu@itts.com.tw',
      Password: 'tim0323',
    };
    const url = 'https://atc.itts.com.tw/User/Login';

    const option = {
      observe: 'response' as 'response',
    };
    this.http.post<any>(url, data, option).subscribe((res) => {
      console.log(res);
      if (data.Account && data.Password) {
        alert('OK');
        // location.href = 'http://localhost:4200/home/home-text';
      } else {
        alert('帳號密碼錯誤');
      }
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.submit();
  }
}
