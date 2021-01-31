import { Component } from '@angular/core';
import { IBacklogItem } from './backlog-item';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent {
  newItem = '';
  backlogItems: IBacklogItem[] = [
    { backlogId: 1,
      description: 'Clean left side of studio',
      ongoing: true},
    { backlogId: 2,
      description: '1 hour of painting',
      ongoing: true},
    { backlogId: 3,
      description: '45 minutes of programming',
      ongoing: true},
  ];

  moveItem(): void {
    alert('clicked');
  }
}
