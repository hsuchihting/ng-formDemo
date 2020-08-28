import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/feature.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  constructor(public featureSvc: FeatureService) {}
  logout(){
    location.href = 'http://localhost:4200/login';
  }
  ngOnInit(): void {}
}
