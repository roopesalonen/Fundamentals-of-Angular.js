import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  imports: [CommonModule],
  templateUrl: './json-pipe.html',
  styleUrl: './json-pipe.css',
})
export class JsonPipe {
  user = { name: 'Sam', age: 51, job: 'Teacher' };
  numArray = [5, 15, 53, 1, 2];
}
