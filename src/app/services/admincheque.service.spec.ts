import { TestBed } from '@angular/core/testing';

import { AdminchequeService } from './admincheque.service';

describe('AdminchequeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminchequeService = TestBed.get(AdminchequeService);
    expect(service).toBeTruthy();
  });
});
