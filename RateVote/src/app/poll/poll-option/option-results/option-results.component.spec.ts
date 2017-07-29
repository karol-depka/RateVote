import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionResultsComponent } from './option-results.component';

describe('OptionResultsComponent', () => {
  let component: OptionResultsComponent;
  let fixture: ComponentFixture<OptionResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
