import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollOptionComponent } from './poll-option.component';

describe('PollOptionComponent', () => {
  let component: PollOptionComponent;
  let fixture: ComponentFixture<PollOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
