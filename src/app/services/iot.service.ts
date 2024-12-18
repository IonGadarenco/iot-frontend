import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IotService {
  private apiUrlGetDevices = "http://0.0.0.0:1337/iot/get-all-devices";
  private apiUrlAddDevice = "http://0.0.0.0:1337/iot/register";
  private apiUrlUpdateDevice = "http://0.0.0.0:1337/iot/update-device";
  private apiUrlDeleteDevice = "http://0.0.0.0:1337/iot/delete-device";
  private apiUrlLedControl = "http://0.0.0.0:1337/iot/led-control";

  constructor(private http: HttpClient) { }

  getDevice(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetDevices);
  }

  createDevice(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrlAddDevice, data);
  }

  updateDevice(macAddress: string, data: string) {
    const url = `${this.apiUrlUpdateDevice}/${macAddress}`;
    const updateData = {
      deviceName: data,
    }
    console.log(updateData);
    return this.http.patch<any>(url, updateData);
  }

  deleteDevice(macAddress: string) {
    const url = `${this.apiUrlDeleteDevice}/${macAddress}`;
    return this.http.delete<any>(url);
  }

  ledControl(data: any) {
    return this.http.post<any>(this.apiUrlLedControl, data);
  }
}
