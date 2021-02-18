import { Component, OnInit } from '@angular/core';
import { IIdea } from '../idea';
import { IdeaService } from '../idea.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {

  ideas:IIdea[] = [];
  errorMessage = '';

  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.ideaService.getIdeas().subscribe({
      next: ideas => this.ideas = ideas,
      error: err => this.errorMessage = err
    });
  }

  onIdeaAdded(description: string): void {
    this.ideaService.addIdea({userId: '', createdTimestamp: '', description})
      .subscribe({
          next: idea => this.ideas.push(idea),
          error: err => this.errorMessage = err
      }
      );

  }

  onIdeaDeleted(deletedIdea: IIdea) {
    this.ideaService.deleteIdea(deletedIdea.userId, deletedIdea.createdTimestamp)
      .subscribe({
        next: data => {
          let index: number = this.ideas.findIndex(idea => idea.userId == deletedIdea.userId && idea.createdTimestamp == deletedIdea.createdTimestamp);
          this.ideas.splice(index, 1);
        },
        error: err => this.errorMessage = err
      });
  }

}
