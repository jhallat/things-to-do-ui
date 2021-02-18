import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IToDo } from '../to-do';

@Component({
  selector: 'app-todays-list-input',
  templateUrl: './todays-list-input.component.html',
  styleUrls: ['./todays-list-input.component.scss']
})
export class TodaysListInputComponent implements OnInit {

  newToDo = ''; 
  @Output() todoAdded: EventEmitter<IToDo> = new EventEmitter<IToDo>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.todoAdded.emit({userId: '', createdTimestamp: '', description: this.newToDo, completed: false});
    this.newToDo = '';
  }

  addDisplayValue() : string {
    if (this.newToDo.length > 0) {
      return 'inline';
    } else {
      return 'none';
    }
  }

}
