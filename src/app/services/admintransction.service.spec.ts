import { TestBed } from '@angular/core/testing';

import { AdmintransctionService } from './admintransction.service';

describe('AdmintransctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmintransctionService = TestBed.get(AdmintransctionService);
    expect(service).toBeTruthy();
  });
});
