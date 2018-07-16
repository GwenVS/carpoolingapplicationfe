import { TestBed, inject } from '@angular/core/testing';

import { CarpoolerService } from './carpooler.service';

describe('CarpoolerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarpoolerService]
    });
  });

  it('should be created', inject([CarpoolerService], (service: CarpoolerService) => {
    expect(service).toBeTruthy();
  }));
});
