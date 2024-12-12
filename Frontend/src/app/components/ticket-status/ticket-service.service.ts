import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private socket!: WebSocket; // Using the "!" operator
  private ticketUpdates = new Subject<string>();

  connect() {
    this.socket = new WebSocket('ws://localhost:8080/ticket-updates');
    this.socket.onmessage = (event) => {
      this.ticketUpdates.next(event.data);
    };
  }

  getUpdates(): Observable<string> {
    return this.ticketUpdates.asObservable();
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
