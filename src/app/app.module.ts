import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingFeeComponent } from './pages/parking-fee/parking-fee.component';
import { HeaderComponent } from './core/header/header.component';
import { MonthlyParkingComponent } from './pages/monthly-parking/monthly-parking.component';


@NgModule({
  declarations: [
    AppComponent,
    ParkingFeeComponent,
    HeaderComponent,
    MonthlyParkingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
