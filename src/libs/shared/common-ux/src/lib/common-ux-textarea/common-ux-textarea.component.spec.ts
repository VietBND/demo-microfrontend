import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUxTextareaComponent } from './common-ux-textarea.component';

describe('CommonUxTextareaComponent', () => {
  let component: CommonUxTextareaComponent;
  let fixture: ComponentFixture<CommonUxTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUxTextareaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUxTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
