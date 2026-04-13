import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class ChangeFontSize {
  @Input() appFontSize : string = ''

  constructor(private element: ElementRef){}

  ngOnInit() {
    this.element.nativeElement.style.fontSize = this.appFontSize
  }
}
