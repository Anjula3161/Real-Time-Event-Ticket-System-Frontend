import { Component } from '@angular/core';
import {ConfigurationFormComponent} from './components/configuration-form/configuration-form.component';
import {TicketStatusComponent} from './components/ticket-status/ticket-status.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import {LogDisplayComponent} from './components/log-display/log-display.component';
import {RouterOutlet} from '@angular/router';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ConfigurationFormComponent,
    TicketStatusComponent,
    ControlPanelComponent,
    LogDisplayComponent,
    RouterOutlet,
    MatCard,
    MatCardTitle,
    MatCardContent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalTickets = 0;
  availableTickets = 0;
  logs: string[] = [];
  configSubmitted: any;
  handleConfigSubmission(config: { totalTickets: number; ticketReleaseRate: number; customerRetrievalRate: number; maxTicketCapacity: number }) {
    console.log('Configuration submitted:', config);
  }

  onConfigSubmit(config: any) {
    console.log('Configuration submitted:', config);
    this.totalTickets = config.totalTickets;
    this.availableTickets = config.totalTickets;
    this.logs.push('Configuration updated.');
  }

  onStart() {
    this.logs.push('System started.');
  }

  onStop() {
    this.logs.push('System stopped.');
  }

  onReset() {
    this.logs.push('System reset.');
    this.availableTickets = this.totalTickets;
  }
}
