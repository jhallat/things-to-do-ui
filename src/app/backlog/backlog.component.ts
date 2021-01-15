import { Component } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent {
  newItem = '';
  backlogItems: any[] = [
    {'description': 'Clean left side of studio',
     'reoccuring': true},
    {'description': '1 hour of painting',
    'reoccuring': true},
    {'description': '45 minutes of programming',
     'reoccuring': true},
  ];

  moveItem(): void {
    alert('clicked');
  }
}
