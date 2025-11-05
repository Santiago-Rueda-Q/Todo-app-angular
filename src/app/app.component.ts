import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Agregar esta importación

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Agregar esto
  imports: [RouterModule]  // Agregar esto
})
export class AppComponent {
  title = 'todo-app-angular';
}
