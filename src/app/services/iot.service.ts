import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotService {
  private apiUrlGetDevices = "https://992b-212-0-203-46.ngrok-free.app/iot/get-all-devices";
  private apiUrlAddDevice = "https://992b-212-0-203-46.ngrok-free.app/iot/register";
  private apiUrlUpdateDevice = "https://992b-212-0-203-46.ngrok-free.app/iot/update-device";
  private apiUrlDeleteDevice = "https://992b-212-0-203-46.ngrok-free.app/iot/delete-device";
  private apiUrlLedControl = "https://992b-212-0-203-46.ngrok-free.app/iot/led-control";

  constructor(private http: HttpClient) { }

  private createHeaders() {
    return new HttpHeaders({
      'ngrok-skip-browser-warning': 'true', // Bypass ngrok warning page
      'Content-Type': 'application/json'
    });
  }

  getDevice(): Observable<any> {
    const headers = this.createHeaders();
    return this.http.get<any>(this.apiUrlGetDevices, { headers });
  }

  createDevice(data: any): Observable<any> {
    const headers = this.createHeaders();
    return this.http.post<any>(this.apiUrlAddDevice, data, { headers });
  }

  updateDevice(macAddress: string, data: string) {
    const url = `${this.apiUrlUpdateDevice}/${macAddress}`;
    const updateData = {
      deviceName: data,
    };
    const headers = this.createHeaders();
    return this.http.patch<any>(url, updateData, { headers });
  }

  deleteDevice(macAddress: string) {
    const url = `${this.apiUrlDeleteDevice}/${macAddress}`;
    const headers = this.createHeaders();
    return this.http.delete<any>(url, { headers });
  }

  ledControl(data: any) {
    const headers = this.createHeaders();
    return this.http.post<any>(this.apiUrlLedControl, data, { headers });
  }
}
