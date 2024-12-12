import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-status',
  templateUrl: './ticket-status.component.html',
  standalone: true,
})
export class TicketStatusComponent {
  @Input() totalTickets!: number; // Mark as input property
  @Input() availableTickets!: number; // Mark as input property
}
