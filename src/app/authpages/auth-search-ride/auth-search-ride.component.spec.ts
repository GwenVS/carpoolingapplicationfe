import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSearchRideComponent } from './auth-search-ride.component';

describe('AuthSearchRideComponent', () => {
  let component: AuthSearchRideComponent;
  let fixture: ComponentFixture<AuthSearchRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSearchRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSearchRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
