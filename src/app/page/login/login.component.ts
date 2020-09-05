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

  constructor(
    public featureSvc: FeatureService,
    public formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // tslint:disable-next-line: typedef
  get f() {
    return this.loginForm.controls;
  }

  // tslint:disable-next-line: typedef
  submit() {
    this.http.post('https://atc.itts.com.tw/User/Login', { title: 'Angular POST Request Example' }).subscribe({
    next: data => this.postId = data,
    error: error => console.error('There was an error!', error)
})
  }

  //   this.submitted = true;
  //   if (this.loginForm.invalid) {
  //     alert('必填欄位未寫');
  //     return;
  //   }
  //   alert('歡迎');
  // }
}
