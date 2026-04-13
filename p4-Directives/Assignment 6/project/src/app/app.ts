import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeBgColor } from './change-bg-color/change-bg-color';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeBgColor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
