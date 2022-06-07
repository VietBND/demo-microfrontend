import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUxDaterangeComponent } from './common-ux-daterange.component';

describe('CommonUxDaterangeComponent', () => {
  let component: CommonUxDaterangeComponent;
  let fixture: ComponentFixture<CommonUxDaterangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUxDaterangeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUxDaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
