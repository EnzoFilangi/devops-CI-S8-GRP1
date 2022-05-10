import { TestBed } from '@angular/core/testing';

import { AbonnementManagerService } from './abonnement-manager.service';

describe('AbonnementManagerService', () => {
  let service: AbonnementManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonnementManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
