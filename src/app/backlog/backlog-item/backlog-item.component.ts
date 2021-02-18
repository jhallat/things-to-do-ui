import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBacklog } from '../backlog';

@Component({
  selector: 'app-backlog-item',
  templateUrl: './backlog-item.component.html',
  styleUrls: ['./backlog-item.component.scss']
})
export class BacklogItemComponent implements OnInit {

  @Input()
  backlog!: IBacklog;
  @Output() backlogDeleted: EventEmitter<IBacklog> = new EventEmitter<IBacklog>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(backlog: IBacklog) {
    this.backlogDeleted.emit(backlog);
  }

}
