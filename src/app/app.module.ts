import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    TodoListComponent  // Solo declara TodoListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }
