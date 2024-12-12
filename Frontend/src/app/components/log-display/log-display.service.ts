import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LogDisplayComponent} from './log-display.component';

@Injectable({
  providedIn: 'root'
})
export class LogDisplayService {
  private apiUrl = 'http://localhost:8000/api/status';

  constructor(private http: HttpClient) {}

  getStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
