import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Weather } from './weather/weather';
import { WeatherYesterday } from './weather-yesterday/weather-yesterday';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Weather, WeatherYesterday],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly course = 'Fundamentals of Angular';
  protected readonly name = 'Roope';
}
