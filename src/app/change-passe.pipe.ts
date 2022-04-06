import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changePasse'
})
export class ChangePassePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
