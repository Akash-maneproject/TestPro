import { TestBed } from '@angular/core/testing';

import { PagenotfounddataService } from './pagenotfounddata.service';

describe('PagenotfounddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagenotfounddataService = TestBed.get(PagenotfounddataService);
    expect(service).toBeTruthy();
  });
});
