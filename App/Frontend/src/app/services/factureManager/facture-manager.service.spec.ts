import { TestBed } from '@angular/core/testing';

import { FactureManagerService } from './facture-manager.service';

describe('FactureManagerService', () => {
  let service: FactureManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
