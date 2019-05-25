import { TestBed } from '@angular/core/testing';

import { PostUpdateService } from './post-update.service';

describe('PostUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostUpdateService = TestBed.get(PostUpdateService);
    expect(service).toBeTruthy();
  });
});
