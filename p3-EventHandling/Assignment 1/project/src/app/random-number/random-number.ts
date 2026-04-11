import { Component } from '@angular/core';

@Component({
  selector: 'app-random-number',
  imports: [],
  templateUrl: './random-number.html',
  styleUrl: './random-number.css',
})
export class RandomNumber {
  hidden = true
  number = 0

  generateNumber() {
    this.number = Math.floor(Math.random() * 100) + 1
    this.hidden = false
  }
}
