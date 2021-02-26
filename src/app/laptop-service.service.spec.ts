import { TestBed } from '@angular/core/testing';

import { LaptopServiceService } from './laptop-service.service';

describe('LaptopServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaptopServiceService = TestBed.get(LaptopServiceService);
    expect(service).toBeTruthy();
  });
});
