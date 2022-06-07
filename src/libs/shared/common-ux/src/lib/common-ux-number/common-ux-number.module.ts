import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonUxNumberComponent } from './common-ux-number.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommonUxNumberComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class CommonUxNumberModule { }
