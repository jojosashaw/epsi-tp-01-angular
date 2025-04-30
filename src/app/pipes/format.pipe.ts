import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const withSpaces = value.replace(/_/g, ' ');
    const lower = withSpaces.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
}
