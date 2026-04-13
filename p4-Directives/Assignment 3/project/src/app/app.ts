import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowImage } from './show-image/show-image';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowImage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
