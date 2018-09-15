import { TestBed, inject } from '@angular/core/testing';

import { AstrosService } from './astros.service';

describe('AstrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AstrosService]
    });
  });

  it('should be created', inject([AstrosService], (service: AstrosService) => {
    expect(service).toBeTruthy();
  }));
});
