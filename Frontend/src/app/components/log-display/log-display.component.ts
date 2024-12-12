import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {LogDisplayService} from './log-display.service';


@Component({
  selector: 'app-log-display',
  templateUrl: './log-display.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./log-display.component.css']
})
export class LogDisplayComponent {
  @Input() logs: string[] = [];
}
