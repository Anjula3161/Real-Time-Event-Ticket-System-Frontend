import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  private apiUrl = 'http://localhost:8000/api/control';

  constructor(private http: HttpClient) {}

  startSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/start`, {});
  }

  stopSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/stop`, {});
  }

  resetSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset`, {});
  }
}
