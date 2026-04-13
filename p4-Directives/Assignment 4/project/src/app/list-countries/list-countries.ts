import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-countries',
  imports: [CommonModule],
  templateUrl: './list-countries.html',
  styleUrl: './list-countries.css',
})
export class ListCountries {
  items: string[] = ['Finland', 'Sweden', 'Estonia', 'Spain', 'Japan'];
}
