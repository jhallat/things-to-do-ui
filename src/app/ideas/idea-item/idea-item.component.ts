import { Component, Input, OnInit } from '@angular/core';
import { IIdea } from '../idea';

@Component({
  selector: 'app-idea-item',
  templateUrl: './idea-item.component.html',
  styleUrls: ['./idea-item.component.scss']
})
export class IdeaItemComponent implements OnInit {

  @Input()
  idea!: IIdea;

  constructor() { }

  ngOnInit(): void {
  }

}
