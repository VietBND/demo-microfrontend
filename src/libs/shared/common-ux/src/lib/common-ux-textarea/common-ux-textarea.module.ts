import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUxTextareaComponent } from './common-ux-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonUxTextareaComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CommonUxTextareaModule { }
