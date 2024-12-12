import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private apiUrl = 'http://localhost:8080/api/configurations';

  constructor(private http: HttpClient) {}

  saveConfiguration(config: any): Observable<any> {
    return this.http.post(this.apiUrl, config, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  startSystem(): Observable<any> {
    return this.http.post(`${this.apiUrl}/start`, {});
  }


  getConfigurations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
