import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertNumber'
})
export class ConvertNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
