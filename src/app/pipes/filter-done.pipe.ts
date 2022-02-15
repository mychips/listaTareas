import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filterDone',
  pure: false
})
export class FilterDonePipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true): Lista[]  {
    
    listas.filter( lista => lista.terminada === completada);
    
    return listas.filter( lista => lista.terminada === completada);
  }

}
