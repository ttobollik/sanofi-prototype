import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallScoreComponent } from './overall-score.component';

describe('OverallScoreComponent', () => {
  let component: OverallScoreComponent;
  let fixture: ComponentFixture<OverallScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
