import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUxNumberComponent } from './common-ux-number.component';

describe('CommonUxNumberComponent', () => {
  let component: CommonUxNumberComponent;
  let fixture: ComponentFixture<CommonUxNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUxNumberComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUxNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
