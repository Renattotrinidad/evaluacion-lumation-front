import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ParkingService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = "http://127.0.0.1:3600/";
  }

  getPricingByCompany(companyCode: number): Promise<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const openedSession = "Bearer 081eff57-945e-4b8e-a4ba-ab97545b23f2";
    headers = new HttpHeaders({ Authorization: openedSession });
    return this._http.get(this.url + 'parking/prices/' + companyCode, { headers }).toPromise();
  }

}
