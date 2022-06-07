import { Component } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'common-ux[type="date"]',
  templateUrl: './common-ux-date.component.html',
  styleUrls: ['./common-ux-date.component.scss'],
})
export class CommonUxDateComponent implements ControlValueAccessor {
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
