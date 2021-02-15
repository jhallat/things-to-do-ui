import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-idea-input',
  templateUrl: './idea-input.component.html',
  styleUrls: ['./idea-input.component.scss']
})
export class IdeaInputComponent implements OnInit {

  newIdea = '';
  @Output() ideaAdded: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.ideaAdded.emit(this.newIdea);
    this.newIdea = '';
  }

  addDisplayValue() : string {
    if (this.newIdea.length > 0) {
      return 'inline';
    } else {
      return 'none';
    }
  }

}
