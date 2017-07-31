import { TestBed, inject } from '@angular/core/testing';

import { UiNotifyService } from './ui-notification.service';

describe('UiNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiNotifyService]
    });
  });

  it('should be created', inject([UiNotifyService], (service: UiNotifyService) => {
    expect(service).toBeTruthy();
  }));
});
