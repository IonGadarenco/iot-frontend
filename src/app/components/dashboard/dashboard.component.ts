import { Component, OnInit, ViewChild } from '@angular/core';
import { IotService } from '../../services/iot.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  deviceData: any[] = [];

  constructor(
    private iotService: IotService
  ) {  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.iotService.getDevice().subscribe({
      next: (data) => {
        this.deviceData = data;
      },
      error: (err) => {
        console.error('Error loading devices:', err);
        // Poți afișa un mesaj de eroare utilizatorului, dacă este cazul
      },
      complete: () => {
        console.log('Device data loaded successfully.');
      }
    });
  }


  addData(newDeviceData: any) {
    this.iotService.createDevice(newDeviceData).subscribe(() => {
      this.loadData();
    });
  }

  deleteDevice(macAddress: string) {
    this.iotService.deleteDevice(macAddress).subscribe();
    this.loadData();
  }

  ledControl(data: any) {
    this.iotService.ledControl(data).subscribe(() => {
      this.loadData();
    });
  }

}
