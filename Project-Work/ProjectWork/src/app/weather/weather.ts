import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.html',
  styleUrl: './weather.css',
})
export class Weather {
  city: string = ''
  errorMsg = signal<string>('')
  weatherData = signal<any>('')
  apiKey = env.openWeatherApiKey

  constructor(private http: HttpClient) {}

  getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData.set(data)
        this.errorMsg.set('')
      },
        error: () => {
        this.errorMsg.set('Error with request')
        this.weatherData.set('')
      }
    });
  }
}
