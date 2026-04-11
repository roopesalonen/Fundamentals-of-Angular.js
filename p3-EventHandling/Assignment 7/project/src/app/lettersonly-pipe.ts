import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lettersonly',
})
export class LettersonlyPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.replace(/[^a-zA-Z]/g, '');
  }
}
