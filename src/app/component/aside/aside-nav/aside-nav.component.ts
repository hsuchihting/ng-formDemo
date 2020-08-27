import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/feature.service';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.scss'],
})
export class AsideNavComponent implements OnInit {
  constructor(public featureSvc: FeatureService) {}

  ngOnInit(): void {}
}
