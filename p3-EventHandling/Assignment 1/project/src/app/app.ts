import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomNumber } from './random-number/random-number';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RandomNumber],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
