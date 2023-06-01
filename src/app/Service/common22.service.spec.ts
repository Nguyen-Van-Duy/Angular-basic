import { TestBed } from '@angular/core/testing';

import { Common22Service } from './common22.service';

describe('Common22Service', () => {
  let service: Common22Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Common22Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
