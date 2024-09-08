import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append',
  standalone: true
})
export class AppendPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
