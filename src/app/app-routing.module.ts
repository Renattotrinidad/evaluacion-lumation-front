import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingFeeComponent } from './pages/parking-fee/parking-fee.component';
import { MonthlyParkingComponent } from './pages/monthly-parking/monthly-parking.component';

const routes: Routes = [
  { path: 'parking-fee', component: ParkingFeeComponent },
  { path: 'monthly-parking', component: MonthlyParkingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
