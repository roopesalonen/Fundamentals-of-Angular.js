import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  isDisabled = false;

  toggleStatus() {
    this.isDisabled = !this.isDisabled;
  }
}
