import { TestBed } from '@angular/core/testing';

import { DeliveryPersonAuthService } from './delivery-person-auth.service';

describe('DeliveryPersonAuthService', () => {
  let service: DeliveryPersonAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryPersonAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
