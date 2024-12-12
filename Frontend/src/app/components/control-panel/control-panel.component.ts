import { Component, Output, EventEmitter } from '@angular/core';
import {ControlService} from './control-panel.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  standalone: true,
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {
  @Output() start = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  onStart() {
    this.start.emit();
  }

  onStop() {
    this.stop.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
