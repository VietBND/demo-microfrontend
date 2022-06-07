import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { SelectDataType } from './select-data-type';

@Component({
  selector: 'common-ux[type="select"]',
  templateUrl: './common-ux-select.component.html',
  styleUrls: ['./common-ux-select.component.scss'],
})
export class CommonUxSelectComponent implements ControlValueAccessor {
  frmCtrl = new FormControl();
  @Input() sources: SelectDataType[] = [];
  @Input() multiple = false;
  @Input() notFoundText = 'Không tìm thấy dữ liệu';
  @Input() label = 'label';
  @Input() value = 'value';
  @Input() loadingText = 'Đang tải....';
  @Input() readonly = false;
  @Input() tabIndex = -1;
  @Input() virtualScroll = true;
  constructor() { }

  trackByValue(item: SelectDataType) {
    return item.value;
  }

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
