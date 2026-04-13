import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeColor } from './change-color';
import { ChangeFontSize } from './change-font-size';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeColor, ChangeFontSize],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
