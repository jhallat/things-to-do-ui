import { Component, Input, OnInit } from '@angular/core';
import { IBacklog } from '../backlog';

@Component({
  selector: 'app-backlog-item',
  templateUrl: './backlog-item.component.html',
  styleUrls: ['./backlog-item.component.scss']
})
export class BacklogItemComponent implements OnInit {

  @Input()
  backlog!: IBacklog;

  constructor() { }

  ngOnInit(): void {
  }

}
