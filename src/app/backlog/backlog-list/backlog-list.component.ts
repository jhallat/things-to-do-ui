import { JSDocTagName } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { IBacklog } from '../backlog';
import { BacklogService } from '../backlog.service';

@Component({
  selector: 'app-backlog-list',
  templateUrl: './backlog-list.component.html',
  styleUrls: ['./backlog-list.component.scss']
})
export class BacklogListComponent implements OnInit {

  backlogs: IBacklog[] = [];
  errorMessage = '';

  constructor(private backlogService: BacklogService) { }

  ngOnInit(): void {
    this.backlogService.getBacklogs().subscribe({
      next: backlogs => this.backlogs = backlogs,
      error: err => this.errorMessage = err
    })
  }

  onBacklogAdded(backlog: IBacklog): void {

    this.backlogService.addBacklog(backlog)
      .subscribe({
        next: backlog => this.backlogs.push(backlog),
        error: err => this.errorMessage = err
      }
      );
  }

  onBacklogDeleted(deletedBacklog: IBacklog) {
    console.log("request delete " + JSON.stringify(deletedBacklog));
    this.backlogService.deleteBacklog(deletedBacklog.userId, deletedBacklog.createdTimestamp)
      .subscribe({
        next: data => {
          let index: number = this.backlogs.findIndex(backlog => backlog.userId == deletedBacklog.userId && backlog.createdTimestamp == deletedBacklog.createdTimestamp);
          this.backlogs.splice(index, 1);
        },
        error: err => this.errorMessage = err
      });
  }

}
