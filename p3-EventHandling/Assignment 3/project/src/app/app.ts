import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomNumber } from './random-number/random-number';
import { Divide } from './divide/divide';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RandomNumber, Divide],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
