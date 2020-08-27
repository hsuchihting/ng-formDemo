import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-group',
  templateUrl: './system-group.component.html',
  styleUrls: ['./system-group.component.scss'],
})
export class SystemGroupComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
