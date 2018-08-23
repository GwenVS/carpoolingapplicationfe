import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSearchRideComponent } from './public-search-ride.component';

describe('PublicSearchRideComponent', () => {
  let component: PublicSearchRideComponent;
  let fixture: ComponentFixture<PublicSearchRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSearchRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSearchRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
