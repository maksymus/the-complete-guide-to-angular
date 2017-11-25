import { Pipe, PipeTransform } from '@angular/core';
import {isArray} from 'util';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (value.length === 0) {
      return value;
    }

    if (isArray(value)) {
      return value.reverse();
    }

    return this.reverse(value);
  }

  private reverse(str: string) {
    return str.split('').reverse().join('');
  }
}
