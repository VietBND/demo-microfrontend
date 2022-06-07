import { Component } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'common-ux[type="textarea"]',
  templateUrl: './common-ux-textarea.component.html',
  styleUrls: ['./common-ux-textarea.component.scss'],
})
export class CommonUxTextareaComponent implements ControlValueAccessor {
  frmCtrl = new FormControl();
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
