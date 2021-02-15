import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBacklog } from '../backlog';

@Component({
  selector: 'app-backlog-input',
  templateUrl: './backlog-input.component.html',
  styleUrls: ['./backlog-input.component.scss']
})
export class BacklogInputComponent implements OnInit {

  newBacklog = '';
  newOngoing = false;
  @Output() backlogAdded: EventEmitter<IBacklog> = new EventEmitter<IBacklog>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.backlogAdded.emit({userId: '', createdTimestamp: '', description: this.newBacklog, ongoing: this.newOngoing});
  }

  addDisplayValue() : string {
    if (this.newBacklog.length > 0) {
      return 'inline';
    } else {
      return 'none';
    }
  }

}
