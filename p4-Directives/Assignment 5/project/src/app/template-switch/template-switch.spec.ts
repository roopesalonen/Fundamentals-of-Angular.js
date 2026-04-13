import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSwitch } from './template-switch';

describe('TemplateSwitch', () => {
  let component: TemplateSwitch;
  let fixture: ComponentFixture<TemplateSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
