import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateSwitch } from './template-switch/template-switch';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateSwitch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
