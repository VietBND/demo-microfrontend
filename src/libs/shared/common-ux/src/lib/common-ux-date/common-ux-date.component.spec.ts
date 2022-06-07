import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUxDateComponent } from './common-ux-date.component';

describe('CommonUxDateComponent', () => {
  let component: CommonUxDateComponent;
  let fixture: ComponentFixture<CommonUxDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUxDateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUxDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
