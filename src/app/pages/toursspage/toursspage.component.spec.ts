import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursspageComponent } from './toursspage.component';

describe('ToursspageComponent', () => {
  let component: ToursspageComponent;
  let fixture: ComponentFixture<ToursspageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToursspageComponent]
    });
    fixture = TestBed.createComponent(ToursspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
