import { TestBed } from '@angular/core/testing';

import { BillingserviceService } from './billingservice.service';

describe('BillingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillingserviceService = TestBed.get(BillingserviceService);
    expect(service).toBeTruthy();
  });
});
