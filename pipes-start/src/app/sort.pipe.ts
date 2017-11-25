import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propName: string): any {
    if (value.length === 0) {
      return value;
    }

    return value.sort((a, b) => a[propName].localeCompare(b[propName]));
  }

}
