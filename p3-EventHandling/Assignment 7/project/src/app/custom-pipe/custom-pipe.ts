import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse-pipe';
import { LettersonlyPipe } from '../lettersonly-pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-custom-pipe',
  imports: [CommonModule, FormsModule, ReversePipe, LettersonlyPipe],
  templateUrl: './custom-pipe.html',
  styleUrl: './custom-pipe.css',
})
export class CustomPipe {
  input = ''
  hidden = true

  showResults() {
    this.hidden = false
  }
}
