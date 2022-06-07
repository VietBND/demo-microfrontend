import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUxTextComponent } from './common-ux-text.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonUxTextComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CommonUxTextModule { }
