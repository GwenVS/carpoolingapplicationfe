import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpagesComponent } from './authpages.component';

describe('AuthpagesComponent', () => {
  let component: AuthpagesComponent;
  let fixture: ComponentFixture<AuthpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
