import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  number1 = 0
  number2 = 0
  result = 0
  hidden = true

  add () {
    this.result = this.number1 + this.number2
    this.hidden = false
  }

    subtract () {
    this.result = this.number1 - this.number2
    this.hidden = false
  }

    multiply () {
    this.result = this.number1 * this.number2
    this.hidden = false
  }
  
    divide () {
    this.result = this.number1 / this.number2
    this.hidden = false
  }
}
