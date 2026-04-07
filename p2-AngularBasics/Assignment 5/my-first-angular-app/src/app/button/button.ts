import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  isDisabled = false;

  toggleColor() {
    this.isDisabled = !this.isDisabled;
  }
}
