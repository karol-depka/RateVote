import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentStatsComponent } from './comment-stats.component';

describe('CommentStatsComponent', () => {
  let component: CommentStatsComponent;
  let fixture: ComponentFixture<CommentStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
