import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourcardComponent } from './tourcard.component';

describe('TourcardComponent', () => {
  let component: TourcardComponent;
  let fixture: ComponentFixture<TourcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourcardComponent]
    });
    fixture = TestBed.createComponent(TourcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
