import { TestBed } from '@angular/core/testing';

import { UsertransctionService } from './usertransction.service';

describe('UsertransctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsertransctionService = TestBed.get(UsertransctionService);
    expect(service).toBeTruthy();
  });
});
