import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IIdea } from '../idea';

@Component({
  selector: 'app-idea-item',
  templateUrl: './idea-item.component.html',
  styleUrls: ['./idea-item.component.scss']
})
export class IdeaItemComponent implements OnInit {

  @Input()
  idea!: IIdea;
  @Output() ideaDeleted: EventEmitter<IIdea> = new EventEmitter<IIdea>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(idea: IIdea) {
    this.ideaDeleted.emit(idea);
  }

}
