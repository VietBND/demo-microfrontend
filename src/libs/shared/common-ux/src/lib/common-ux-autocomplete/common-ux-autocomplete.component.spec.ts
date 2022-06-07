import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUxAutocompleteComponent } from './common-ux-autocomplete.component';

describe('CommonUxAutocompleteComponent', () => {
  let component: CommonUxAutocompleteComponent;
  let fixture: ComponentFixture<CommonUxAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonUxAutocompleteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUxAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
