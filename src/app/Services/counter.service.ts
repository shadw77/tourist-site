import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  private counter = new BehaviorSubject<number>(0);
  get_Counter(){
    return  this.counter.asObservable();
   }
 set_Counter(newVal : number){
  if (newVal < 0) {
    newVal = 0;
  }
     this.counter.next(newVal)
   }
}
