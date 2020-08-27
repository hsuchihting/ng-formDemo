import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemGroupComponent } from './system-group.component';

describe('SystemGroupComponent', () => {
  let component: SystemGroupComponent;
  let fixture: ComponentFixture<SystemGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
