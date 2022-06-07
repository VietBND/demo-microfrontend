import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUxSelectComponent } from './common-ux-select.component';

describe('CommonUxSelectComponent', () => {
  let component: CommonUxSelectComponent;
  let fixture: ComponentFixture<CommonUxSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUxSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUxSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
