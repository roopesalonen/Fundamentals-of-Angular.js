import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListCountries } from './list-countries/list-countries';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListCountries],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
