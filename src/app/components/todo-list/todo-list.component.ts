import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  loading = false;
  error: any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.loading = true;
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err;
        this.loading = false;
      },
    });
  }
}
