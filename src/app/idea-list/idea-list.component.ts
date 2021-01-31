import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {

  ideas:String[] = ['Dinosaur studio', 'Something big'];

  constructor() { }

  ngOnInit(): void {
  }

  onIdeaAdded(idea: string): void {
    this.ideas.push(idea);
  }

}
