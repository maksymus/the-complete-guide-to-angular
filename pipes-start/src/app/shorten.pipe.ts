import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, liimit: number): any {
    if (value.length > liimit) {
      return (value as string).substring(0, liimit) + ' ...';
    }

    return value;
  }

}
