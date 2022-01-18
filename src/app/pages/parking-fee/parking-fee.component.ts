import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';

@Component({
  selector: 'app-parking-fee',
  templateUrl: './parking-fee.component.html',
  styleUrls: ['./parking-fee.component.css'],
  providers: [ParkingService]
})
export class ParkingFeeComponent implements OnInit {

  public companyCode: number = 0;

  constructor(
    private parkingService : ParkingService,
  ) { }

  ngOnInit(): void {
    this.companyCode = 1;
    this.getParkingPrice(this.companyCode);
  }

  getParkingPrice(companyCode: number){
    this.parkingService.getPricingByCompany(companyCode).then(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
      }
    );
  }

}
