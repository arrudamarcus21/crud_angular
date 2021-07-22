import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ativoInativo'
})
export class AtivoInativoPipe implements PipeTransform {

  transform(value: any): any {
    return value ? 'Ativo' : 'Inativo';;
  }

}
