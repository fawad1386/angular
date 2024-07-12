import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ToDo } from './todo';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  name : string  = 'Fawad';

  
  }
