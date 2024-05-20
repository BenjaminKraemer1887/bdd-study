import { TestBed } from '@angular/core/testing';

import { LoginPrepService } from './login-prep.service';

describe('LoginPrepService', () => {
  let service: LoginPrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginPrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
