import { TestBed } from '@angular/core/testing';

import { ChequeservicesService } from './chequeservices.service';

describe('ChequeservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChequeservicesService = TestBed.get(ChequeservicesService);
    expect(service).toBeTruthy();
  });
});
