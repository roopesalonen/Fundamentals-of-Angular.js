import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divide',
  imports: [FormsModule],
  templateUrl: './divide.html',
  styleUrl: './divide.css',
})
export class Divide {
  hidden = true
  @Input() value = 0
  divider = 0
  dividedResult = 0

  divideResult(){
    this.dividedResult = this.value / this.divider
    this.hidden = false
  }
}
