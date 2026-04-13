import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-image',
  imports: [CommonModule],
  templateUrl: './show-image.html',
  styleUrl: './show-image.css',
})
export class ShowImage {
  hidden = false

  showImage() {
    this.hidden = !this.hidden
  }
}
