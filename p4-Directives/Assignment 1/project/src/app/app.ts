import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeColor } from './change-color';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeColor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
