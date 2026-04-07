import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from './weather/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Weather],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly course = 'Fundamentals of Angular';
  protected readonly name = 'Roope';
}
