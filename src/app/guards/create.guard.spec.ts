import { TestBed, async, inject } from '@angular/core/testing';

import { CreateGuard } from './create.guard';

describe('CreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateGuard]
    });
  });

  it('should ...', inject([CreateGuard], (guard: CreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
