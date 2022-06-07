import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'common-ux[type="number"]',
  templateUrl: './common-ux-number.component.html',
  styleUrls: ['./common-ux-number.component.scss'],
})
export class CommonUxNumberComponent implements ControlValueAccessor {
  frmCtrl = new FormControl();
  @Input() min = 0;
  @Input() max = 0;
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
