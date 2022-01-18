import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFeeComponent } from './parking-fee.component';

describe('ParkingFeeComponent', () => {
  let component: ParkingFeeComponent;
  let fixture: ComponentFixture<ParkingFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
