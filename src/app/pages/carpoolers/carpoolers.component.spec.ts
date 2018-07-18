import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolersComponent } from './carpoolers.component';

describe('CarpoolersComponent', () => {
  let component: CarpoolersComponent;
  let fixture: ComponentFixture<CarpoolersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
