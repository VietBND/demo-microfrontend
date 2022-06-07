import { Component } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'common-ux[type="daterange"]',
  templateUrl: './common-ux-daterange.component.html',
  styleUrls: ['./common-ux-daterange.component.scss'],
})
export class CommonUxDaterangeComponent implements ControlValueAccessor {
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
