import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://todoapitest.juansegaliz.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((res: any) => {
        return (res.data || []).map((item: any) => ({
          id: item.id,
          title: item.title,
          isCompleted: item.isCompleted,
          description: item.description,
        })) as Todo[];
      })
    );
  }
}
