import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-switch',
  imports: [CommonModule],
  templateUrl: './template-switch.html',
  styleUrl: './template-switch.css',
})
export class TemplateSwitch {
  template = 'default'

  changeTemplate(newTemplate: string) {
    this.template = newTemplate
  }
}
