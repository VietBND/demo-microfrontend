import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'common-ux[type="text"]',
  templateUrl: './common-ux-text.component.html',
  styleUrls: ['./common-ux-text.component.scss'],
})
export class CommonUxTextComponent implements ControlValueAccessor {
  frmCtrl = new FormControl();
  @Input() minLength = 0;
  @Input() maxLength = 0;
  @Input() pattern = null;
  constructor() { }

  writeValue(obj: any): void {
    this.frmCtrl.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.frmCtrl.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.frmCtrl.valueChanges.subscribe(fn);
  }
}
