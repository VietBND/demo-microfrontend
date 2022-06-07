import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { RouterModule } from '@angular/router';
import { CommonUxSelectModule } from '@demo-microfrontend/shared/common-ux';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    CommonUxSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookingComponent
      }
    ])],
})
export class BookingModule { }
