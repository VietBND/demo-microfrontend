import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUxAutocompleteComponent } from './common-ux-autocomplete.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonUxAutocompleteComponent],
  imports: [CommonModule, NgSelectModule, ReactiveFormsModule],
})
export class CommonUxAutocompleteModule { }
