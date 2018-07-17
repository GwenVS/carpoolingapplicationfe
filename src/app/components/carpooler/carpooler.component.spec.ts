import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpoolerComponent } from './carpooler.component';

describe('CarpoolerComponent', () => {
  let component: CarpoolerComponent;
  let fixture: ComponentFixture<CarpoolerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpoolerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpoolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
