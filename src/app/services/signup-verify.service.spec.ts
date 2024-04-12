import { TestBed } from '@angular/core/testing';

import { SignupVerifyService } from './signup-verify.service';

describe('SignupVerifyService', () => {
  let service: SignupVerifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignupVerifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
