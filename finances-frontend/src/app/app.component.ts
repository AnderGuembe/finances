import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovementListComponent } from "./finances/movement-list/movement-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovementListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'finances-frontend';
}
