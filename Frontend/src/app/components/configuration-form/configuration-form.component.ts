import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatGridListModule } from '@angular/material/grid-list'; // Import MatGridListModule
import { ConfigurationService } from './configuration.service';

@Component({
  selector: 'app-configuration-form',
  templateUrl: './configuration-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
  styleUrls: ['./configuration-form.component.css']
})
export class ConfigurationFormComponent {
  @Input() configSubmitted!: boolean;
  @Output() configSubmittedChange = new EventEmitter<boolean>();

  totalTickets!: number;
  ticketReleaseRate!: number;
  customerRetrievalRate!: number;
  maxTicketCapacity!: number;

  // Output event emitter for submitting the configuration
  @Output() configSubmittedEvent = new EventEmitter<{
    totalTickets: number;
    ticketReleaseRate: number;
    customerRetrievalRate: number;
    maxTicketCapacity: number;
  }>();

  constructor(private configurationService: ConfigurationService) {}

  // Form submit handler
  onSubmit() {
    const config = {
      totalTickets: this.totalTickets,
      ticketReleaseRate: this.ticketReleaseRate,
      customerRetrievalRate: this.customerRetrievalRate,
      maxTicketCapacity: this.maxTicketCapacity,
    };

    console.log('Payload sent:', config);

    this.configurationService.saveConfiguration(config).subscribe(
      (response) => {
        console.log('Configuration saved successfully:', response);
      },
      (error) => {
        console.error('Error saving configuration:', error);
      }
    );
  }

  startSystem() {
    this.configurationService.startSystem().subscribe(
      (response) => console.log('System started:', response),
      (error) => console.error('Error starting system:', error)
    );
  }

}
