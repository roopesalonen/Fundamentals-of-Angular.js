import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  imports: [CommonModule, FormsModule],
  templateUrl: './text-editor.html',
  styleUrl: './text-editor.css',
})
export class TextEditor {
  text: string = ''
  isBold = false
  isItalic = false
  isUnderlined = false

  bold() {
    this.isBold = !this.isBold
  }

  italic() {
    this.isItalic = !this.isItalic
  }

  underline() {
    this.isUnderlined = !this.isUnderlined
  }
}
