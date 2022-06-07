import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUxSelectComponent } from './common-ux-select.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonUxSelectComponent],
  imports: [CommonModule, NgSelectModule, ReactiveFormsModule],
  exports: [CommonUxSelectComponent],
})
export class CommonUxSelectModule { }
