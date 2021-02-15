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

}
