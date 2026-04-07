import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  imports: [FormsModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  isDisabled = false;
  input = ''

  toggleStatus() {
    this.isDisabled = !this.isDisabled;
  }
}
