import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtext'
})
export class SubtextPipe implements PipeTransform {

 
        
    transform(value: string): string {
    
      return value.slice(0, 50) + '...'; 
   
   
  }


}
