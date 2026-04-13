import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBgColor } from './change-bg-color';

describe('ChangeBgColor', () => {
  let component: ChangeBgColor;
  let fixture: ComponentFixture<ChangeBgColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeBgColor],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeBgColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
