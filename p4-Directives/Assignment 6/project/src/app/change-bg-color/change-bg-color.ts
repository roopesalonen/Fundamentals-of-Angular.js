import { Component } from '@angular/core';
import { ChangeBgDirective } from '../change-bg';

@Component({
  selector: 'app-change-bg-color',
  imports: [ChangeBgDirective],
  templateUrl: './change-bg-color.html',
  styleUrl: '../app.css',
})
export class ChangeBgColor {
  darkMode = false

  toggleDarkMode() {
    this.darkMode = !this.darkMode
  }
}
