import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColor {
  @Input() appChangeColor : string = ''

  constructor(private element: ElementRef){}

  ngOnInit() {
    this.element.nativeElement.style.color = this.appChangeColor
  }
}
