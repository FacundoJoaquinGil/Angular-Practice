import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado'
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(value: string | undefined): string {
    return value?.toUpperCase() || '';
  }

}
