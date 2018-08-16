import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicpagesComponent } from './login.component';

describe('LoginComponent', () => {
  let component: PublicpagesComponent;
  let fixture: ComponentFixture<PublicpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
