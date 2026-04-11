import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Divide } from '../divide/divide';

@Component({
  selector: 'app-random-number',
  imports: [FormsModule, Divide],
  templateUrl: './random-number.html',
  styleUrl: './random-number.css',
})
export class RandomNumber {
  hidden = true
  number = 0
  input = 0
  result = 0

  generateNumber() {
    this.number = Math.floor(Math.random() * 100) + 1
    this.result = this.number + this.input
    this.hidden = false
  }
}
