import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'booking',
        loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingModule)
      }
    ])

  ],
})
export class FlightFeatureFlightModule { }
