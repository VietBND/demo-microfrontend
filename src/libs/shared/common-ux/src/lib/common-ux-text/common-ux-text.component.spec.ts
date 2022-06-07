import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUxTextComponent } from './common-ux-text.component';

describe('CommonUxTextComponent', () => {
  let component: CommonUxTextComponent;
  let fixture: ComponentFixture<CommonUxTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUxTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
