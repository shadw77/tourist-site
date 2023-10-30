import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuttext'
})
export class CuttextPipe implements PipeTransform {

   transform(value: string,characters:number=50): string | null{
    if(value){
      return `${value.substring(0,characters)}`;
    }
    return null;
  }

}
