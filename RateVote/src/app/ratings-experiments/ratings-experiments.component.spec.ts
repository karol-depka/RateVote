import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsExperimentsComponent } from './ratings-experiments.component';

describe('RatingsExperimentsComponent', () => {
  let component: RatingsExperimentsComponent;
  let fixture: ComponentFixture<RatingsExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingsExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
