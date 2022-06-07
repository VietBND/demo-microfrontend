import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { debounceTime, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { AutocompleteDataType } from './autocomplete-data-type';

@Component({
  selector: 'common-ux[type="autocomplete"]',
  templateUrl: './common-ux-autocomplete.component.html',
  styleUrls: ['./common-ux-autocomplete.component.scss'],
})
export class CommonUxAutocompleteComponent implements OnInit, OnDestroy, ControlValueAccessor {
  frmCtrl = new FormControl();
  @Input() typeahead: Subject<AutocompleteDataType[]> = new Subject();
  private sources: AutocompleteDataType[] = [];
  @Input() label = 'text';
  @Input() value = 'id';
  @Input() loadingText = 'Đang tải....';
  @Input() readonly = false;
  @Input() tabIndex = -1;
  @Input() virtualScroll = true;
  private destroy$: Subject<boolean> = new Subject();
  constructor() { }

  ngOnInit(): void {
    this.typeahead
      .pipe
      (
        debounceTime(300),
        switchMap(dataSource => {
          return dataSource;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  trackByValue(item: AutocompleteDataType) {
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
