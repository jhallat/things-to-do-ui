import { Component, OnInit } from '@angular/core';
import { IToDo } from '../to-do';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todays-list-container',
  templateUrl: './todays-list-container.component.html',
  styleUrls: ['./todays-list-container.component.scss']
})
export class TodaysListContainerComponent implements OnInit {

  todos:IToDo[] = [];
  errorMessage = '';
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: todos => this.todos = todos,
      error: err => this.errorMessage = err
    })
  }

  onTodoAdded(newTodo: IToDo): void {
    this.todoService.addTodo(newTodo)
      .subscribe({
        next: todo => this.todos.push(todo),
        error: err => this.errorMessage = err
      })
  }

}
