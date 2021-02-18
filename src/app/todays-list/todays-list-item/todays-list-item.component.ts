import { Component, Input, OnInit } from '@angular/core';
import { IToDo } from '../to-do';

@Component({
  selector: 'app-todays-list-item',
  templateUrl: './todays-list-item.component.html',
  styleUrls: ['./todays-list-item.component.scss']
})
export class TodaysListItemComponent implements OnInit {

  @Input()
  todo!: IToDo;
  constructor() { }

  ngOnInit(): void {
  }

}
