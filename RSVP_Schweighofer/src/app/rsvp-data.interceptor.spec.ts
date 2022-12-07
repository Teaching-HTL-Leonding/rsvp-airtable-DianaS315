import { TestBed } from '@angular/core/testing';

import { RsvpDataInterceptor } from './rsvp-data.interceptor';

describe('RsvpDataInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RsvpDataInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RsvpDataInterceptor = TestBed.inject(RsvpDataInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
