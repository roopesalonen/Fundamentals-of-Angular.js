import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pipes } from './pipes/pipes';
import { JsonPipe } from './json-pipe/json-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pipes, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
