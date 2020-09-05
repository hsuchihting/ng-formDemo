import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  close = false; // nav 是否關閉
  show = false; // 是否出現選單
  constructor() {}

  // tslint:disable-next-line: typedef
  asideToggle() {
    return this.close;
  }
  // tslint:disable-next-line: typedef
  asideSwitch() {
    this.close = !this.close;
  }
  // tslint:disable-next-line: typedef
  showList() {
    return this.show;
  }
  // tslint:disable-next-line: typedef
  toggleList() {
    this.show = !this.show;
  }
}
